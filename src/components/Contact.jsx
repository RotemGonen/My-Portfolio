import Section from './Section';
import './Contact.css';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="card contact-card">
        <p className="contact-intro">
          Get in touch — add your preferred email, LinkedIn, or other links below.
        </p>
        <div className="contact-links">
          <a href="mailto:you@example.com" className="contact-link">
            you@example.com
          </a>
          <a href="#" className="contact-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#" className="contact-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
