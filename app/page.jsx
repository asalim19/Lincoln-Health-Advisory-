'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight, Calendar, BookOpen, Mic } from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/company/lincoln-healthcare-advisory'; // update to your actual page

const Linkedin = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
  </svg>
);

const ComplianceConsultingWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', inquiry: '' });

  const services = [
    {
      id: 1,
      title: 'Compliance Risk Assessment',
      description: 'Identify and prioritize compliance risks across your operations. We map current state, assess control gaps, and quantify exposure.'
    },
    {
      id: 2,
      title: 'Compliance Maturity Assessment',
      description: 'Benchmark your compliance program against industry standards. Understand current maturity, roadmap improvements, and track progress.'
    },
    {
      id: 3,
      title: 'Staff Augmentation & Fractional Support',
      description: 'Access experienced compliance practitioners when and how you need them. Fill project gaps with senior expertise, or engage a fractional compliance leader — executive-level guidance on a part-time basis, without the overhead of a full-time hire.',
      maturityLevels: [
        { level: 1, label: 'Project-based' },
        { level: 2, label: 'Embedded' },
        { level: 3, label: 'Fractional Leadership' },
        { level: 4, label: 'Strategic Oversight' },
      ]
    }
  ];

  const events = [
    {
      id: 1,
      date: 'Coming Soon',
      title: 'Speaking engagements & webinars',
      description: 'Upcoming conference sessions, webinars, and workshops will be posted here.'
    }
  ];

  const resources = {
    podcasts: [
      {
        title: 'Finding Compliance',
        description: 'Honest conversations behind the careers shaping healthcare compliance.',
        link: '#'
      }
    ],
    articles: [
      {
        title: 'Articles coming soon',
        description: 'Insights on healthcare compliance, program maturity, and risk will be published here.',
        link: '#'
      }
    ]
  };

  const MaturityRubric = ({ levels }) => (
    <div className="mt-4 space-y-2">
      <div className="text-xs font-semibold uppercase tracking-wider" style={{color: 'var(--navy)'}}>Engagement Models</div>
      <div className="flex gap-2 flex-wrap">
        {levels.map((level, i) => (
          <span key={level.level} className="text-xs px-3 py-1 rounded-full text-white font-medium"
            style={{backgroundColor: ['#1B2F5E', '#28788A', '#2D9670', '#2ECC71'][i]}}>
            {level.level}. {level.label}
          </span>
        ))}
      </div>
    </div>
  );

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', inquiry: '' });
    alert('Thank you for reaching out. We\'ll be in touch shortly.');
  };

  return (
    <div className="min-h-screen site-bg">
      <style>{`
        :root {
          --navy: #10233E;
          --navy-mid: #1B2F5E;
          --green: #2ECC71;
          --teal: #427E2B;
          --bg: #FFFFFF;
          --bg-soft: #F7F9FB;
        }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--navy);
          background-color: var(--bg);
        }
        .site-bg { background-color: var(--bg); color: var(--navy); }
        .display {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .navy { color: var(--navy); }
        .green { color: var(--green); }
        .bg-navy { background-color: var(--navy); }
        .bg-soft { background-color: var(--bg-soft); }
        a { color: inherit; text-decoration: none; transition: color 0.2s ease; }
        a:hover { color: var(--green); }
.nav-link { position: relative; font-size: 0.9375rem; font-weight: 500; white-space: nowrap; }        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background-color: var(--green);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        button { font-family: inherit; border: none; cursor: pointer; transition: all 0.2s ease; }
        .cta-button {
          background-color: var(--green);
          color: white;
          padding: 0.875rem 1.75rem;
          border-radius: 6px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
        }
        .cta-button:hover { background-color: var(--navy); }
        .cta-button-outline {
          border: 2px solid var(--navy);
          background-color: transparent;
          color: var(--navy);
          padding: 0.8rem 1.75rem;
          border-radius: 6px;
          font-weight: 600;
        }
        .cta-button-outline:hover { background-color: var(--navy); color: white; }
        .service-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(16, 35, 62, 0.12);
          border-radius: 12px;
          border-top: 4px solid var(--green);
        }
        .service-card:hover {
          box-shadow: 0 12px 32px rgba(16, 35, 62, 0.12);
          transform: translateY(-3px);
        }
        .section-divider {
          height: 4px;
          width: 80px;
          background: linear-gradient(to right, var(--navy-mid), var(--teal), var(--green));
          border-radius: 2px;
          margin: 0 0 2rem 0;
        }
        input, textarea {
          font-family: inherit;
          border: 1px solid rgba(16, 35, 62, 0.25);
          border-radius: 6px;
          padding: 0.75rem;
          background-color: white;
          color: var(--navy);
        }
        input:focus, textarea:focus { outline: none; border-color: var(--green); box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.2); }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b" style={{backgroundColor: 'white', borderColor: 'rgba(16,35,62,0.08)'}}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <Image src="/logo.png" alt="Lincoln Healthcare Advisory" width={220} height={76} priority />
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#offerings" className="nav-link">Offerings</a>
            <a href="#events" className="nav-link">Events</a>
            <a href="#resources" className="nav-link">Resources</a>
            <a href="/assessment" className="nav-link">Free Assessment</a>
            <a href="/platform" className="nav-link">MaturityIQ</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#contact"><button className="cta-button">Get Started</button></a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t p-4 space-y-3" style={{borderColor: 'rgba(16,35,62,0.08)', backgroundColor: 'white'}}>
            <a href="#about" className="block py-2">About</a>
            <a href="#offerings" className="block py-2">Offerings</a>
            <a href="#events" className="block py-2">Events</a>
            <a href="#resources" className="block py-2">Resources</a>
             <a href="/assessment" className="nav-link">Free Assessment</a>
            <a href="/platform" className="nav-link">MaturityIQ</a>
            <a href="#contact" className="block py-2">Contact</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="py-2 flex items-center gap-2"><Linkedin size={18} /> LinkedIn</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="top" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="section-divider"></div>
          <h1 className="display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 navy">
            Compliance expertise, <span className="green">practitioner-led</span>.
          </h1>
          <p className="text-lg md:text-xl opacity-75 mb-8 max-w-2xl leading-relaxed">
            We help hospitals and health systems build mature compliance programs. Senior practitioners, not junior staff. Real assessment, not checkbox audits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact"><button className="cta-button">Schedule Assessment <ArrowRight size={18} /></button></a>
            <a href="#offerings"><button className="cta-button-outline">Learn More</button></a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-soft py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="section-divider"></div>
              <h2 className="display text-3xl md:text-4xl mb-6 navy">About Us</h2>
              <p className="mb-4 opacity-75 leading-relaxed">
                We are senior healthcare compliance practitioners. After years at the Big Four, we built this firm to deliver differently: deeper expertise, real insight, not consulting fluff, and pricing that reflects efficiency, not headcount.
              </p>
              <p className="opacity-75 leading-relaxed">
                Our assessments are built on 15+ years of real-world compliance program work. We know what maturity looks like because we've built it.
              </p>
            </div>
            <div className="bg-navy p-8 rounded-xl text-white">
              <h3 className="display text-2xl mb-6">What We Deliver</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><span className="green font-bold">✓</span><span>Clear, actionable findings — not volumes of unnecessary detail.</span></li>
                <li className="flex gap-3"><span className="green font-bold">✓</span><span>Maturity-based assessment that shows where you are and where to go.</span></li>
                <li className="flex gap-3"><span className="green font-bold">✓</span><span>Senior-led engagements with full transparency on who's doing the work.</span></li>
                <li className="flex gap-3"><span className="green font-bold">✓</span><span>Implementation support, not just reports.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <div className="section-divider"></div>
          <h2 className="display text-3xl md:text-4xl mb-4 navy">Our Offerings</h2>
          <p className="opacity-75 max-w-2xl">Each engagement is grounded in maturity frameworks. We measure current state, identify gaps, and help you build toward operational excellence.</p>
        </div>
        <div className="grid gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card p-8 bg-white">
              <h3 className="display text-2xl mb-4 navy">{service.title}</h3>
              <p className="opacity-75 mb-6 leading-relaxed">{service.description}</p>
{service.maturityLevels && <MaturityRubric levels={service.maturityLevels} />}            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-soft py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider"></div>
          <div className="mb-12 flex items-center gap-3">
            <Calendar size={28} className="green" />
            <h2 className="display text-3xl md:text-4xl navy">Events</h2>
          </div>
          <div className="grid gap-6">
            {events.map((event) => (
              <div key={event.id} className="service-card p-8 bg-white">
                <div className="text-sm green font-semibold mb-2">{event.date}</div>
                <h3 className="display text-2xl mb-3 navy">{event.title}</h3>
                <p className="opacity-75 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="max-w-6xl mx-auto px-6 py-24">
        <div className="section-divider"></div>
        <div className="mb-12 flex items-center gap-3">
          <BookOpen size={28} className="green" />
          <h2 className="display text-3xl md:text-4xl navy">Resources</h2>
        </div>

        <h3 className="display text-2xl mb-6 navy flex items-center gap-2"><Mic size={22} className="green" /> Podcast</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {resources.podcasts.map((pod, i) => (
            <a key={i} href={pod.link} className="service-card p-8 bg-white block">
              <h4 className="display text-xl mb-3 navy">{pod.title}</h4>
              <p className="opacity-75 leading-relaxed text-sm">{pod.description}</p>
              <span className="green text-sm font-semibold mt-4 inline-flex items-center gap-1">Listen <ArrowRight size={14} /></span>
            </a>
          ))}
        </div>

        <h3 className="display text-2xl mb-6 navy">Articles</h3>
        <div className="grid gap-6">
          {resources.articles.map((article, i) => (
            <a key={i} href={article.link} className="service-card p-8 bg-white block">
              <h4 className="display text-xl mb-3 navy">{article.title}</h4>
              <p className="opacity-75 leading-relaxed text-sm">{article.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-soft py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="section-divider"></div>
              <h2 className="display text-3xl md:text-4xl mb-6 navy">Get in Touch</h2>
              <p className="opacity-75 mb-8 leading-relaxed">
                Ready to assess your compliance maturity? Let's talk about where you are, where you need to be, and how to get there.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:info@lincolnhealthcareadvisory.com" className="opacity-75">info@lincolnhealthcareadvisory.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={18} className="green" />
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="opacity-75">Connect on LinkedIn</a>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input type="text" placeholder="Your name" value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})} required className="w-full" />
              <input type="email" placeholder="Email address" value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})} required className="w-full" />
              <textarea placeholder="Tell us about your inquiry..." rows="5" value={contactForm.inquiry}
                onChange={(e) => setContactForm({...contactForm, inquiry: e.target.value})} className="w-full" />
              <button type="submit" className="w-full cta-button justify-center">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="display text-lg">Lincoln Healthcare Advisory</div>
            <div className="flex items-center gap-8 text-sm opacity-80">
              <a href="#events">Events</a>
              <a href="#resources">Resources</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-sm opacity-60">
            <p>© {new Date().getFullYear()} Lincoln Healthcare Advisory. Healthcare compliance consulting, practitioner-led.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComplianceConsultingWebsite;
