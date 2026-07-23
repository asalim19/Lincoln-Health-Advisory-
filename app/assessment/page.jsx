'use client';

import React, { useState } from 'react';
import { logoDataUri } from '../logoData';
import { ArrowRight, ArrowLeft, CheckCircle, Menu, X } from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/company/lincoln-healthcare-advisory';

const Linkedin = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
  </svg>
);
// ⬇️ REPLACE these two before launch
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzdlnvkj';
const CALENDLY_URL = 'https://calendly.com/ahmed-lincolnhealthcareadvisory/new-meeting';

const QUESTIONS = [
  { element: 'Leadership & Governance', q: 'How would you describe board and senior leadership engagement with the compliance program?' },
  { element: 'Leadership & Governance', q: 'Does your compliance officer have direct, independent access to the board?' },
  { element: 'Policies & Procedures', q: 'How current and accessible are your compliance policies?' },
  { element: 'Policies & Procedures', q: 'How are new regulatory requirements incorporated into policy updates?' },
  { element: 'Training & Education', q: 'How is compliance training tailored to role-specific risks?' },
  { element: 'Training & Education', q: 'How do you measure training effectiveness beyond completion rates?' },
  { element: 'Communication & Reporting', q: 'How confident are employees in reporting concerns without retaliation?' },
  { element: 'Communication & Reporting', q: 'How are hotline/reporting trends analyzed and escalated?' },
  { element: 'Monitoring & Auditing', q: 'How is your annual audit workplan connected to your risk assessment?' },
  { element: 'Monitoring & Auditing', q: 'How mature is your ongoing monitoring (vs. point-in-time audits)?' },
  { element: 'Enforcement & Discipline', q: 'How consistently are compliance violations addressed across all levels of staff?' },
  { element: 'Enforcement & Discipline', q: 'Are incentives and discipline documented and applied uniformly?' },
  { element: 'Response & Prevention', q: 'How quickly are identified issues investigated and remediated?' },
  { element: 'Response & Prevention', q: 'How are root causes analyzed to prevent recurrence?' },
  { element: 'Risk Assessment', q: 'How often is a formal, enterprise-wide compliance risk assessment performed?' },
  { element: 'Risk Assessment', q: 'How directly do risk assessment results drive program priorities and resources?' },
];

const OPTIONS = [
  'Not in place / informal',
  'Documented but inconsistent',
  'Defined and operating',
  'Measured and continuously improving',
];

export default function AssessmentPage() {
  const [step, setStep] = useState(-1); // -1 = intro, 0..15 = questions, 16 = contact, 17 = done
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({ name: '', email: '', organization: '', role: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const answer = (idx, value) => {
    setAnswers({ ...answers, [idx]: value });
    setTimeout(() => setStep(idx + 1 < QUESTIONS.length ? idx + 1 : QUESTIONS.length), 200);
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const payload = {
      ...contact,
      _subject: `New Compliance Assessment: ${contact.organization}`,
      ...Object.fromEntries(QUESTIONS.map((q, i) => [
        `Q${i + 1} [${q.element}] ${q.q}`,
        answers[i] !== undefined ? `${answers[i] + 1} — ${OPTIONS[answers[i]]}` : 'Skipped'
      ])),
    };
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStep(17);
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    }
    setSubmitting(false);
  };

  const progress = step >= 0 && step < QUESTIONS.length ? ((step) / QUESTIONS.length) * 100 : 100;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7F9FB', fontFamily: "'Poppins', sans-serif", color: '#10233E' }}>
      <style>{`
        .aq-btn { display:block; width:100%; text-align:left; padding:1rem 1.25rem; margin-bottom:0.75rem;
          border:2px solid rgba(16,35,62,0.15); border-radius:10px; background:white; color:#10233E;
          font-family:inherit; font-size:1rem; cursor:pointer; transition:all .15s ease; }
        .aq-btn:hover { border-color:#29B866; background:#F0FBF4; }
        .aq-cta { background:#29B866; color:white; border:none; padding:0.9rem 1.75rem; border-radius:8px;
          font-weight:600; font-size:1rem; cursor:pointer; display:inline-flex; align-items:center; gap:.5rem; }
        .aq-cta:hover { background:#10233E; }
        .aq-cta:disabled { opacity:.6; cursor:default; }
        .aq-input { width:100%; padding:.8rem; border:1px solid rgba(16,35,62,.25); border-radius:8px;
          font-family:inherit; font-size:1rem; margin-bottom:1rem; }
        .aq-input:focus { outline:none; border-color:#29B866; box-shadow:0 0 0 3px rgba(41,184,102,.2); }
      `}</style>

      {/* Header */}
      <nav style={{ background: 'white', borderBottom: '1px solid rgba(16,35,62,0.08)', position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/"><img src={logoDataUri} alt="Lincoln Healthcare Advisory" width={180} height={62} /></a>

          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '1.5rem' }}>
            <a href="/#about" style={{ fontSize: '.9375rem', fontWeight: 500, color: '#10233E' }}>About</a>
            <a href="/#offerings" style={{ fontSize: '.9375rem', fontWeight: 500, color: '#10233E' }}>Offerings</a>
            <a href="/#events" style={{ fontSize: '.9375rem', fontWeight: 500, color: '#10233E' }}>Events</a>
            <a href="/#resources" style={{ fontSize: '.9375rem', fontWeight: 500, color: '#10233E' }}>Insights</a>
            <a href="/platform" style={{ fontSize: '.9375rem', fontWeight: 500, color: '#10233E' }}>MaturityIQ</a>
            <a href="/#contact" style={{ fontSize: '.9375rem', fontWeight: 500, color: '#10233E' }}>Contact</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden" style={{ borderTop: '1px solid rgba(16,35,62,0.08)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            <a href="/#about" style={{ padding: '.5rem 0', color: '#10233E' }}>About</a>
            <a href="/#offerings" style={{ padding: '.5rem 0', color: '#10233E' }}>Offerings</a>
            <a href="/#events" style={{ padding: '.5rem 0', color: '#10233E' }}>Events</a>
            <a href="/#resources" style={{ padding: '.5rem 0', color: '#10233E' }}>Insights</a>
            <a href="/platform" style={{ padding: '.5rem 0', color: '#10233E' }}>MaturityIQ</a>
            <a href="/#contact" style={{ padding: '.5rem 0', color: '#10233E' }}>Contact</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '.5rem 0', display: 'flex', alignItems: 'center', gap: 8, color: '#10233E' }}><Linkedin size={18} /> LinkedIn</a>
          </div>
        )}
      </nav>

      {/* Progress bar */}
      {step >= 0 && step <= QUESTIONS.length && (
        <div style={{ height: 6, background: 'rgba(16,35,62,0.08)' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(to right,#1B2F5E,#28788A,#29B866)', transition: 'width .3s ease' }} />
        </div>
      )}

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Intro */}
        {step === -1 && (
          <div>
            <div style={{ color: '#427E2B', fontWeight: 600, letterSpacing: 2, fontSize: '.85rem', marginBottom: '.75rem' }}>FREE SELF-ASSESSMENT</div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
              How mature is your compliance program?
            </h1>
            <p style={{ opacity: .8, lineHeight: 1.7, marginBottom: '.75rem' }}>
              Answer 16 questions covering all eight elements of an effective compliance program — the same framework federal regulators use. Takes about 5 minutes.
            </p>
            <p style={{ opacity: .8, lineHeight: 1.7, marginBottom: '2rem' }}>
              When you're done, we'll score your program, benchmark it, and walk you through your results and a prioritized roadmap in a complimentary 30-minute review call.
            </p>
            <button className="aq-cta" onClick={() => setStep(0)}>Start the Assessment <ArrowRight size={18} /></button>
          </div>
        )}

        {/* Questions */}
        {step >= 0 && step < QUESTIONS.length && (
          <div>
            <div style={{ color: '#427E2B', fontWeight: 600, letterSpacing: 1.5, fontSize: '.8rem', marginBottom: '.5rem', textTransform: 'uppercase' }}>
              {QUESTIONS[step].element} · Question {step + 1} of {QUESTIONS.length}
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.35, marginBottom: '1.5rem' }}>{QUESTIONS[step].q}</h2>
            {OPTIONS.map((opt, oi) => (
              <button key={oi} className="aq-btn" onClick={() => answer(step, oi)}
                style={answers[step] === oi ? { borderColor: '#29B866', background: '#F0FBF4' } : {}}>
                <span style={{ color: '#427E2B', fontWeight: 700, marginRight: 8 }}>{oi + 1}</span>{opt}
              </button>
            ))}
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} style={{ background: 'none', border: 'none', color: '#28788A', cursor: 'pointer', marginTop: '.5rem', display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'inherit' }}>
                <ArrowLeft size={16} /> Previous question
              </button>
            )}
          </div>
        )}

        {/* Contact gate */}
        {step === QUESTIONS.length && (
          <div>
            <CheckCircle size={44} color="#29B866" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '.75rem' }}>Your assessment is complete.</h2>
            <p style={{ opacity: .8, lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Tell us where to send your results, then pick a time for your complimentary 30-minute results review. We'll score your program across all eight elements and walk you through a prioritized roadmap — no charge, no obligation.
            </p>
            <form onSubmit={submit}>
              <input className="aq-input" placeholder="Your name" required value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })} />
              <input className="aq-input" type="email" placeholder="Work email" required value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })} />
              <input className="aq-input" placeholder="Organization" required value={contact.organization}
                onChange={(e) => setContact({ ...contact, organization: e.target.value })} />
              <input className="aq-input" placeholder="Your role (optional)" value={contact.role}
                onChange={(e) => setContact({ ...contact, role: e.target.value })} />
              {error && <p style={{ color: '#B00020', marginBottom: '1rem' }}>{error}</p>}
              <button className="aq-cta" type="submit" disabled={submitting}>
                {submitting ? 'Submitting…' : <>Get My Results <ArrowRight size={18} /></>}
              </button>
            </form>
          </div>
        )}

        {/* Done → schedule */}
        {step === 17 && (
          <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
            <CheckCircle size={56} color="#29B866" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '.75rem' }}>One last step — schedule your results review.</h2>
            <p style={{ opacity: .8, lineHeight: 1.7, marginBottom: '2rem', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
              We've received your responses. Pick a time below and we'll walk through your scores, how you compare, and the three moves that would raise your maturity fastest.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <button className="aq-cta" style={{ fontSize: '1.1rem' }}>Schedule My Results Review <ArrowRight size={18} /></button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
