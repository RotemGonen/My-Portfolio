import Section from './Section';
import { useFadeIn } from '../hooks/useFadeIn';
import './About.css';

export default function About() {
  const [cardRef, isVisible] = useFadeIn();

  return (
    <Section id="about" title="About">
      <div ref={cardRef} className={`card about-card ${isVisible ? 'fade-in' : ''}`}>
        <p>
        Passionate about technology, automation, and data-driven solutions. Always looking for new challenges and opportunities to grow.
        </p>
      </div>
    </Section>
  );
}
