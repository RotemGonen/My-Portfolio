import Section from './Section';
import './About.css';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="card about-card">
        <p>
          Add a short bio here. Who you are, what you do, and what you care about.
          Edit <code>src/components/About.jsx</code> to update this section.
        </p>
      </div>
    </Section>
  );
}
