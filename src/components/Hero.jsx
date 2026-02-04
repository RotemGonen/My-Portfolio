import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img
        src="/profile.png"
        alt="Rotem Gonen"
        className="hero-photo"
      />
      <h1 className="hero-title">
        Rotem Gonen
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
