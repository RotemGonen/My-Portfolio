import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero-badge">Dashboard CV</p>
      <h1 className="hero-title">
        Your name
      </h1>
      <p className="hero-subtitle">
        Role or tagline — edit this in <code>src/components/Hero.jsx</code>
      </p>
      <div className="hero-actions">
        <a href="#contact" className="hero-cta">
          Get in touch
        </a>
        <a href="#experience" className="hero-cta hero-cta--secondary">
          Experience
        </a>
      </div>
    </section>
  );
}
