'use client';

import React from 'react';
import { logoDataUri } from '../logoData';
import { ArrowRight, Brain, Gauge, FileCheck, TrendingUp, Building2, ShieldCheck } from 'lucide-react';

// ⬇️ Working product name — change here, updates everywhere
const PRODUCT_NAME = 'MaturityIQ';
const CALENDLY_URL = 'https://calendly.com/ahmed-lincolnhealthcareadvisory/maturityiq'; // update

export default function PlatformPage() {
  const features = [
    {
      icon: <Gauge size={26} />,
      title: 'AI-Assisted Maturity Assessment',
      description: 'Guided assessments across all eight elements of an effective compliance program, scored against our proprietary maturity model.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Grounded in Regulator Frameworks',
      description: 'Our maturity model is built on the DOJ\'s Evaluation of Corporate Compliance Programs (ECCP), the HCCA-OIG Measuring Compliance Program Effectiveness resource guide, and OIG compliance program guidance.'
    },
    {
      icon: <Brain size={26} />,
      title: 'AI-Generated Roadmaps',
      description: 'Every assessment produces a prioritized improvement roadmap — specific, sequenced actions mapped to the gaps that matter most.'
    },
    {
      icon: <FileCheck size={26} />,
      title: 'Board & Regulator-Ready Reporting',
      description: 'Executive dashboards and DOJ ECCP-aligned readiness reports, formatted for board meetings and regulator scrutiny.'
    },
    {
      icon: <TrendingUp size={26} />,
      title: 'Progress Tracking',
      description: 'Reassess over time, track corrective actions, and demonstrate program maturation — evidence that your program works in practice, not just on paper.'
    },
    {
      icon: <Building2 size={26} />,
      title: 'Built for Healthcare',
      description: 'Designed specifically for hospitals, health systems, physician groups, and healthcare organizations — not adapted from generic GRC software.'
    },
  ];

  const steps = [
    { n: '01', title: 'Assess', text: 'Your team completes structured, AI-assisted assessments across the eight program elements.' },
    { n: '02', title: 'Score', text: 'The platform scores maturity against our proprietary model built on DOJ and OIG evaluation frameworks.' },
    { n: '03', title: 'Act', text: 'Receive a prioritized roadmap, track corrective actions, and report progress to leadership and the board.' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', fontFamily: "'Poppins', sans-serif", color: '#10233E' }}>
      <style>{`
        .pf-cta { background:#29B866; color:white; border:none; padding:0.9rem 1.75rem; border-radius:8px;
          font-weight:600; font-size:1rem; cursor:pointer; display:inline-flex; align-items:center; gap:.5rem;
          font-family:inherit; transition:all .2s ease; }
        .pf-cta:hover { background:#10233E; }
        .pf-cta-outline { background:transparent; color:#10233E; border:2px solid #10233E; padding:0.8rem 1.75rem;
          border-radius:8px; font-weight:600; font-size:1rem; cursor:pointer; font-family:inherit; transition:all .2s ease; }
        .pf-cta-outline:hover { background:#10233E; color:white; }
        .pf-card { border:1px solid rgba(16,35,62,0.12); border-radius:12px; border-top:4px solid #29B866;
          padding:2rem; background:white; transition:all .3s ease; }
        .pf-card:hover { box-shadow:0 12px 32px rgba(16,35,62,0.12); transform:translateY(-3px); }
        .pf-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; }
        .pf-divider { height:4px; width:80px; background:linear-gradient(to right,#1B2F5E,#28788A,#29B866);
          border-radius:2px; margin-bottom:2rem; }
        a { color:inherit; text-decoration:none; }
      `}</style>

      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid rgba(16,35,62,0.08)', padding: '0.75rem 1.5rem', position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
<a href="/"><img src={logoDataUri} alt="Lincoln Healthcare Advisory" width={190} height={65} /></a>
          <a href="/"><span style={{ fontSize: '.9rem', fontWeight: 500 }}>← Back to main site</span></a>
        </div>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: 760 }}>
          <div className="pf-divider"></div>
          <div style={{ color: '#427E2B', fontWeight: 600, letterSpacing: 2, fontSize: '.85rem', marginBottom: '1rem' }}>
            {PRODUCT_NAME.toUpperCase()} — COMPLIANCE MATURITY PLATFORM
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Your compliance program, <span style={{ color: '#29B866' }}>measured like regulators measure it.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: .78, lineHeight: 1.7, marginBottom: '2rem', maxWidth: 640 }}>
            {PRODUCT_NAME} is an AI-powered platform that helps healthcare organizations assess, score, and mature their
            compliance programs — built on a proprietary maturity model grounded in the DOJ ECCP and OIG effectiveness frameworks.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <button className="pf-cta">Request Pilot Access <ArrowRight size={18} /></button>
            </a>
            <a href="/assessment"><button className="pf-cta-outline">Try the Free Assessment</button></a>
          </div>
        </div>
      </section>

      {/* Why it exists */}
      <section style={{ backgroundColor: '#F7F9FB', padding: '4.5rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="pf-divider"></div>
         <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Two ways to measure. One maturity model.</h2>
          <p style={{ opacity: .78, lineHeight: 1.75, maxWidth: 780, marginBottom: '1rem' }}>
            A comprehensive, practitioner-led maturity assessment is the gold standard — validated through documentation
            review and interviews, it gives you a defensible baseline and a roadmap you can take to the board. Some
            organizations need exactly that.
          </p>
          <p style={{ opacity: .78, lineHeight: 1.75, maxWidth: 780, marginBottom: '1rem' }}>
            But between formal assessments — or for organizations that want a lighter-touch, more frequent read on their
            program without engaging outside consultants — {PRODUCT_NAME} puts the same maturity model in your team's hands.
            Check your program quarterly. Track corrective actions. Walk into board meetings with current numbers instead
            of last year's report.
          </p>
          <p style={{ opacity: .78, lineHeight: 1.75, maxWidth: 780 }}>
            They're built on the same proprietary framework, so they work together: license the platform for continuous
            visibility, and bring in our senior practitioners when you want independent validation or deeper expertise.
          </p>
          <p style={{ opacity: .78, lineHeight: 1.75, maxWidth: 780 }}>
            {PRODUCT_NAME} turns maturity assessment from an event into an operating capability your team runs continuously —
            with senior practitioner expertise available on top whenever you need it.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '4.5rem 1.5rem' }}>
        <div className="pf-divider"></div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.5rem' }}>What {PRODUCT_NAME} does</h2>
        <div className="pf-grid">
          {features.map((f, i) => (
            <div key={i} className="pf-card">
              <div style={{ color: '#29B866', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '.6rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.92rem', opacity: .75, lineHeight: 1.65 }}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ backgroundColor: '#F7F9FB', padding: '4.5rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="pf-divider"></div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.5rem' }}>How it works</h2>
          <div className="pf-grid">
            {steps.map((s, i) => (
              <div key={i} style={{ padding: '1rem' }}>
                <div style={{ fontSize: '2.6rem', fontWeight: 700, color: '#29B866', marginBottom: '.5rem' }}>{s.n}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '.5rem' }}>{s.title}</h3>
                <p style={{ opacity: .75, lineHeight: 1.65 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing + services */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '4.5rem 1.5rem' }}>
        <div className="pf-divider"></div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Licensing & expert support</h2>
        <p style={{ opacity: .78, lineHeight: 1.75, maxWidth: 780, marginBottom: '2rem' }}>
          {PRODUCT_NAME} is licensed annually to healthcare organizations, with tiers based on organization size and number of
          facilities. Every license includes onboarding with a senior compliance practitioner — and when your results call for
          deeper work, Lincoln Healthcare Advisory's assessment and fractional support services are the expert layer on top of the platform.
        </p>
        <div style={{ background: '#10233E', borderRadius: 16, padding: '3rem 2rem', textAlign: 'center', color: 'white' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '.75rem' }}>See {PRODUCT_NAME} in action</h3>
          <p style={{ opacity: .85, marginBottom: '1.75rem', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            30 minutes. Your program, scored live against the frameworks regulators actually use.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <button className="pf-cta" style={{ fontSize: '1.05rem' }}>Request Pilot Access <ArrowRight size={18} /></button>
          </a>
        </div>
      </section>

      {/* Footer strip */}
      <div style={{ borderTop: '1px solid rgba(16,35,62,0.08)', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '.85rem', opacity: .6 }}>© {new Date().getFullYear()} Lincoln Healthcare Advisory · {PRODUCT_NAME} is a product of Lincoln Healthcare Advisory</p>
      </div>
    </div>
  );
}
