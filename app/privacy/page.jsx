'use client';

import React from 'react';
import { logoDataUri } from '../logoData';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', fontFamily: "'Poppins', sans-serif", color: '#10233E' }}>
      <style>{`
        .pp-h2 { font-size: 1.4rem; font-weight: 600; margin: 2.5rem 0 .75rem; color: #10233E; }
        .pp-p { opacity: .8; line-height: 1.75; margin-bottom: 1rem; font-size: .95rem; }
        .pp-ul { opacity: .8; line-height: 1.75; margin: 0 0 1rem 1.25rem; font-size: .95rem; }
        a { color: #29B866; }
      `}</style>

      <div style={{ background: 'white', borderBottom: '1px solid rgba(16,35,62,0.08)', padding: '0.75rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <a href="/"><img src={logoDataUri} alt="Lincoln Healthcare Advisory" width={190} height={65} /></a>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '3.5rem 1.5rem 5rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '.5rem' }}>Privacy Policy</h1>
        <p style={{ opacity: .6, fontSize: '.9rem', marginBottom: '2rem' }}>Last updated: [Month Day, 2026]</p>

        <p className="pp-p">
          Lincoln Healthcare Advisory (&ldquo;LHA,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal
          information you share with us through our website, lincolnhealthcareadvisory.com (the &ldquo;Site&rdquo;). This Privacy Policy
          explains what information we collect, how we use it, and the choices you have.
        </p>

        <h2 className="pp-h2">Information We Collect</h2>
        <p className="pp-p">We collect personal information you voluntarily provide when you:</p>
        <ul className="pp-ul">
          <li>Submit our contact form (name, email address, and message)</li>
          <li>Complete our free compliance maturity self-assessment (name, work email, organization, role, and your assessment responses)</li>
          <li>Register for an event or webinar we host (name, email, and any details requested during Zoom registration)</li>
        </ul>
        <p className="pp-p">
          We do not knowingly collect sensitive personal information, payment information, or information from children under 13
          through this Site.
        </p>

        <h2 className="pp-h2">How We Use Your Information</h2>
        <p className="pp-p">We use the information we collect to:</p>
        <ul className="pp-ul">
          <li>Respond to your inquiries and requests</li>
          <li>Score and follow up on your compliance maturity self-assessment, including scheduling a complimentary results review</li>
          <li>Register you for events and send related communications, including joining instructions</li>
          <li>Improve our Site, services, and content</li>
          <li>Send occasional updates about our services, insights, or events, where permitted — you may opt out at any time</li>
        </ul>
        <p className="pp-p">We do not sell your personal information to third parties.</p>

        <h2 className="pp-h2">Third-Party Service Providers</h2>
        <p className="pp-p">
          We use trusted third-party services to operate parts of this Site. These providers process personal information on our
          behalf and maintain their own privacy and security practices:
        </p>
        <ul className="pp-ul">
          <li><strong>Formspree</strong> — processes submissions from our contact form and assessment tool</li>
          <li><strong>Zoom</strong> — processes event and webinar registrations</li>
          <li><strong>Calendly</strong> — processes scheduling for results review calls and consultations</li>
          <li><strong>Vercel</strong> — hosts this website</li>
        </ul>
        <p className="pp-p">
          We encourage you to review these providers&rsquo; own privacy policies for details on how they handle information.
        </p>

        <h2 className="pp-h2">Cookies and Analytics</h2>
        <p className="pp-p">
          Our Site may use minimal cookies or similar technologies necessary for basic functionality. We do not currently use
          third-party advertising or tracking cookies. If this changes, this policy will be updated accordingly.
        </p>

        <h2 className="pp-h2">Data Retention</h2>
        <p className="pp-p">
          We retain personal information submitted through this Site for as long as reasonably necessary to fulfill the purposes
          described above, respond to your inquiries, or as required by law.
        </p>

        <h2 className="pp-h2">Your Choices and Rights</h2>
        <p className="pp-p">
          Depending on your location, you may have the right to request access to, correction of, or deletion of your personal
          information, or to opt out of certain uses. To make such a request, contact us using the information below.
        </p>
        <p className="pp-p">
          If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA).
          If you are located in the European Economic Area, you may have additional rights under the General Data Protection
          Regulation (GDPR). We will respond to verified requests consistent with applicable law.
        </p>

        <h2 className="pp-h2">Data Security</h2>
        <p className="pp-p">
          We take reasonable measures to protect the personal information submitted through this Site. However, no method of
          transmission over the internet is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="pp-h2">Changes to This Policy</h2>
        <p className="pp-p">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last
          updated&rdquo; date.
        </p>

        <h2 className="pp-h2">Contact Us</h2>
        <p className="pp-p">
          If you have questions about this Privacy Policy or how we handle your information, contact us at{' '}
          <a href="mailto:info@lincolnhealthcareadvisory.com">info@lincolnhealthcareadvisory.com</a>.
        </p>

        <p style={{ opacity: .55, fontSize: '.82rem', marginTop: '2.5rem', fontStyle: 'italic' }}>
          This policy is provided for general informational purposes and does not constitute legal advice.
        </p>
      </div>
    </div>
  );
}
