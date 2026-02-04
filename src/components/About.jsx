import Section from './Section';
import { useFadeIn } from '../hooks/useFadeIn';
import './About.css';

export default function About() {
  const [cardRef, isVisible] = useFadeIn();

  return (
    <Section id="about" title="About">
      <div ref={cardRef} className={`card about-card ${isVisible ? 'fade-in' : ''}`}>
        <p>
          Add a short bio here. Who you are, what you do, and what you care about.
          Edit <code>src/components/About.jsx</code> to update this section.
        </p>
      </div>
    </Section>
  );
}
