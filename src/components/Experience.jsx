import Section from './Section';
import { useFadeIn } from '../hooks/useFadeIn';
import './Experience.css';

const base = import.meta.env.BASE_URL;

const PLACEHOLDER_ITEMS = [
  { role: 'Technical Solutions Engineer', company: 'Unity', period: '2024 – Present', logo: `${base}Unity-logo.svg` },
  { role: 'NOC Engineer', company: 'NeoGames', period: '2022 – 2024', logo: `${base}NeoGames-logo.png` }
];

function ExperienceCard({ item, index }) {
  const [cardRef, isVisible] = useFadeIn({ rootMargin: '0px 0px -30px 0px' });

  return (
    <div ref={cardRef} className={`card experience-card ${isVisible ? 'fade-in' : ''}`}>
      {item.logo && (
        <div className="experience-card-logo">
          <img src={item.logo} alt={`${item.company} logo`} />
        </div>
      )}
      <div className="experience-card-header">
        <h3 className="experience-role">{item.role}</h3>
        <span className="experience-period">{item.period}</span>
      </div>
      <p className="experience-company">{item.company}</p>
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
