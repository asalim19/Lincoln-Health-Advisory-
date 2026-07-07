'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const ComplianceConsultingWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', inquiry: '' });

  const services = [
    {
      id: 1,
      title: 'Compliance Risk Assessment',
      description: 'Identify and prioritize compliance risks across your operations. We map current state, assess control gaps, and quantify exposure.',
      icon: '📋',
      maturityLevels: [
        { level: 1, label: 'Ad-hoc', description: 'Informal, reactive risk identification' },
        { level: 2, label: 'Documented', description: 'Policies exist, inconsistently applied' },
        { level: 3, label: 'Managed', description: 'Processes defined and monitored' },
        { level: 4, label: 'Optimized', description: 'Continuous improvement in place' },
      ]
    },
    {
      id: 2,
      title: 'Compliance Maturity Assessment',
      description: 'Benchmark your compliance program against industry standards. Understand current maturity, roadmap improvements, and track progress.',
      icon: '📊',
      maturityLevels: [
        { level: 1, label: 'Initial', description: 'No formal program' },
        { level: 2, label: 'Repeatable', description: 'Some processes in place' },
        { level: 3, label: 'Defined', description: 'Program documented and enforced' },
        { level: 4, label: 'Measured', description: 'Metrics tracked regularly' },
      ]
    },
    {
      id: 3,
      title: 'Privacy Risk Assessment',
      description: 'Evaluate patient data handling and privacy controls. Identify vulnerabilities in collection, use, storage, and disclosure practices.',
      icon: '🔒',
      maturityLevels: [
        { level: 1, label: 'Minimal', description: 'Basic awareness only' },
        { level: 2, label: 'Documented', description: 'Policies drafted' },
        { level: 3, label: 'Operational', description: 'Controls actively managed' },
        { level: 4, label: 'Integrated', description: 'Privacy by design embedded' },
      ]
    },
    {
      id: 4,
      title: 'Privacy Maturity Assessment',
      description: 'Assess your organization\'s privacy program maturity. Move from checkbox compliance to privacy-by-design principles.',
      icon: '🛡️',
      maturityLevels: [
        { level: 1, label: 'Reactive', description: 'Compliance-driven only' },
        { level: 2, label: 'Procedural', description: 'Documented controls' },
        { level: 3, label: 'Strategic', description: 'Privacy governance in place' },
        { level: 4, label: 'Enterprise', description: 'Privacy embedded in all decisions' },
      ]
    },
    {
      id: 5,
      title: 'Staff Augmentation',
      description: 'Access experienced compliance and privacy practitioners. Fill gaps with senior expertise without the overhead of permanent hires.',
      icon: '👥',
      maturityLevels: [
        { level: 1, label: 'Project-based', description: 'Short-term support' },
        { level: 2, label: 'Embedded', description: 'Ongoing coordination' },
        { level: 3, label: 'Leadership', description: 'Senior practitioner guidance' },
        { level: 4, label: 'Strategic', description: 'Program oversight and mentoring' },
      ]
    }
  ];

  const MaturityRubric = ({ levels, serviceTitle }) => (
    <div className="mt-4 space-y-2">
      <div className="text-xs font-semibold text-charcoal uppercase tracking-wider">Maturity Levels</div>
      <div className="flex gap-1">
        {levels.map((level) => (
          <div key={level.level} className="flex-1 group">
            <div className="h-1 bg-warm-accent rounded-full opacity-70 hover:opacity-100 transition-opacity cursor-help" />
            <div className="text-xs font-medium text-charcoal mt-1 opacity-0 group-hover:opacity-100 transition-opacity absolute bg-warm-paper p-2 rounded border border-charcoal/10 whitespace-nowrap text-left z-10">
              {level.label}
            </div>
          </div>
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
    <div className="min-h-screen bg-warm-paper text-charcoal">
      <style>{`
        :root {
          --color-charcoal: #2C3E3E;
          --color-warm-paper: #F5F3F0;
          --color-warm-accent: #B8956A;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: var(--color-charcoal);
          background-color: var(--color-warm-paper);
        }

        .serif-display {
          font-family: 'Crimson Text', Georgia, serif;
          font-weight: 400;
          letter-spacing: -0.02em;
        }

        .charcoal { color: var(--color-charcoal); }
        .warm-accent { color: var(--color-warm-accent); }
        .bg-charcoal { background-color: var(--color-charcoal); }
        .bg-warm-accent { background-color: var(--color-warm-accent); }
        .bg-warm-paper { background-color: var(--color-warm-paper); }
        .border-charcoal { border-color: var(--color-charcoal); }
        
        .service-card {
          transition: all 0.3s ease;
          border: 1px solid var(--color-charcoal);
          border-radius: 2px;
        }

        .service-card:hover {
          box-shadow: 0 8px 24px rgba(44, 62, 62, 0.12);
          transform: translateY(-2px);
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        a:hover {
          color: var(--color-warm-accent);
        }

        .nav-link {
          position: relative;
          font-size: 0.9375rem;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--color-warm-accent);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        button {
          font-family: inherit;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cta-button {
          background-color: var(--color-charcoal);
          color: var(--color-warm-paper);
          padding: 0.875rem 1.75rem;
          border-radius: 2px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
        }

        .cta-button:hover {
          background-color: var(--color-warm-accent);
          color: var(--color-charcoal);
        }

        .cta-button-outline {
          border: 1px solid var(--color-charcoal);
          background-color: transparent;
          color: var(--color-charcoal);
          padding: 0.875rem 1.75rem;
          border-radius: 2px;
          font-weight: 500;
        }

        .cta-button-outline:hover {
          background-color: var(--color-charcoal);
          color: var(--color-warm-paper);
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(to right, var(--color-charcoal), transparent);
          margin: 3rem 0;
        }

        input, textarea {
          font-family: inherit;
          border: 1px solid var(--color-charcoal);
          border-radius: 2px;
          padding: 0.75rem;
          background-color: white;
          color: var(--color-charcoal);
        }

        input:focus, textarea:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--color-warm-accent);
        }

        @media (max-width: 768px) {
          .hidden-mobile {
            display: none;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 bg-warm-paper border-b border-charcoal/10 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="serif-display text-xl font-bold tracking-tight">
            <span className="warm-accent">Lincoln Health Advisory</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#offerings" className="nav-link">Offerings</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="cta-button">Get Started</button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-charcoal/10 p-4 space-y-3">
            <a href="#about" className="block py-2">About</a>
            <a href="#offerings" className="block py-2">Offerings</a>
            <a href="#contact" className="block py-2">Contact</a>
            <button className="w-full cta-button justify-center">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="serif-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Compliance expertise, <span className="warm-accent">practitioner-led</span>.
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl leading-relaxed">
            We help hospitals and health systems build mature compliance and privacy programs. Senior practitioners, not junior staff. Real assessment, not checkbox audits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="cta-button">
              Schedule Assessment <ArrowRight size={18} />
            </button>
            <button className="cta-button-outline">Learn More</button>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto'}}></div>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="serif-display text-3xl md:text-4xl mb-6">About Us</h2>
            <p className="mb-4 opacity-80 leading-relaxed">
              We're senior healthcare compliance and privacy practitioners. After years at the Big Four, we built this firm to deliver differently: deeper expertise, faster turnaround, and pricing that reflects efficiency, not headcount.
            </p>
            <p className="opacity-80 leading-relaxed">
              Our assessments are built on 15+ years of real-world compliance and privacy program work. We know what maturity looks like because we've built it.
            </p>
          </div>
          <div className="bg-charcoal text-warm-paper p-8 rounded-lg">
            <h3 className="serif-display text-2xl mb-6">What We Deliver</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="warm-accent font-bold">✓</span>
                <span>Clear, actionable findings—not volumes of unnecessary detail.</span>
              </li>
              <li className="flex gap-3">
                <span className="warm-accent font-bold">✓</span>
                <span>Maturity-based assessment that shows where you are and where to go.</span>
              </li>
              <li className="flex gap-3">
                <span className="warm-accent font-bold">✓</span>
                <span>Senior-led engagements with full transparency on who's doing the work.</span>
              </li>
              <li className="flex gap-3">
                <span className="warm-accent font-bold">✓</span>
                <span>Implementation support, not just reports.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto'}}></div>

      {/* Offerings Section */}
      <section id="offerings" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="serif-display text-3xl md:text-4xl mb-4">Our Offerings</h2>
          <p className="opacity-80 max-w-2xl">Each assessment is grounded in maturity frameworks. We measure current state, identify gaps, and help you build toward operational excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card p-8 bg-white">
              <div className="flex items-start justify-between mb-4">
                <h3 className="serif-display text-2xl flex-1">{service.title}</h3>
                <span className="text-3xl ml-4">{service.icon}</span>
              </div>
              <p className="opacity-80 mb-6 leading-relaxed">{service.description}</p>
              <MaturityRubric levels={service.maturityLevels} serviceTitle={service.title} />
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto'}}></div>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="serif-display text-3xl md:text-4xl mb-6">Get in Touch</h2>
            <p className="opacity-80 mb-8 leading-relaxed">
              Ready to assess your compliance and privacy maturity? Let's talk about where you are, where you need to be, and how to get there.
            </p>
            <div className="space-y-4">
              <div>
                <div className="font-semibold mb-1">Email</div>
                <a href="mailto:hello@lincolnhealthadvisory.com" className="opacity-80">hello@lincolnhealthadvisory.com</a>
              </div>
              <div>
                <div className="font-semibold mb-1">Phone</div>
                <a href="tel:+15551234567" className="opacity-80">(555) 123-4567</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              required
              className="w-full"
            />
            <input
              type="email"
              placeholder="Email address"
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              required
              className="w-full"
            />
            <textarea
              placeholder="Tell us about your inquiry..."
              rows="5"
              value={contactForm.inquiry}
              onChange={(e) => setContactForm({...contactForm, inquiry: e.target.value})}
              className="w-full"
            />
            <button type="submit" className="w-full cta-button justify-center">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-warm-paper border-t border-charcoal/10 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="serif-display text-lg">Lincoln Health Advisory</div>
            <div className="flex gap-8 text-sm opacity-80">
              <a href="#" className="hover:text-warm-accent">Privacy Policy</a>
              <a href="#" className="hover:text-warm-accent">Terms</a>
              <a href="#" className="hover:text-warm-accent">LinkedIn</a>
            </div>
          </div>
          <div className="border-t border-warm-paper/20 pt-8 text-sm opacity-60">
            <p>© {new Date().getFullYear()} Lincoln Health Advisory. Healthcare compliance consulting, practitioner-led.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComplianceConsultingWebsite;
