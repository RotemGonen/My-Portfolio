import Section from './Section';
import { useFadeIn } from '../hooks/useFadeIn';
import './Experience.css';

const PLACEHOLDER_ITEMS = [
  { role: 'Job title', company: 'Company name', period: 'YYYY – Present', description: 'Brief description of responsibilities and achievements.' },
  { role: 'Previous role', company: 'Previous company', period: 'YYYY – YYYY', description: 'Another role summary.' },
];

function ExperienceCard({ item, index }) {
  const [cardRef, isVisible] = useFadeIn({ rootMargin: '0px 0px -30px 0px' });

  return (
    <div ref={cardRef} className={`card experience-card ${isVisible ? 'fade-in' : ''}`}>
      <div className="experience-card-header">
        <h3 className="experience-role">{item.role}</h3>
        <span className="experience-period">{item.period}</span>
      </div>
      <p className="experience-company">{item.company}</p>
      <p className="experience-desc">{item.description}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="experience-list">
        {PLACEHOLDER_ITEMS.map((item, i) => (
          <ExperienceCard key={i} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}
