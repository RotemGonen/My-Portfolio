import Section from './Section';
import { useFadeIn } from '../hooks/useFadeIn';
import './Education.css';

const EDUCATION_ITEMS = [
  {
    degree: 'Your degree',
    institution: 'University or school name',
    period: 'YYYY – YYYY',
    details: 'Short description of your focus, achievements, or relevant coursework.',
  },
  {
    degree: 'Certification or course',
    institution: 'Platform / organization',
    period: 'YYYY',
    details: 'Optional: briefly describe what you learned or the skills you gained.',
  },
];

function EducationCard({ item }) {
  const [cardRef, isVisible] = useFadeIn({ rootMargin: '0px 0px -30px 0px' });

  return (
    <div ref={cardRef} className={`card education-card ${isVisible ? 'fade-in' : ''}`}>
      <div className="education-card-header">
        <h3 className="education-degree">{item.degree}</h3>
        <span className="education-period">{item.period}</span>
      </div>
      <p className="education-institution">{item.institution}</p>
      <p className="education-details">{item.details}</p>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="education-list">
        {EDUCATION_ITEMS.map((item, i) => (
          <EducationCard key={i} item={item} />
        ))}
      </div>
    </Section>
  );
}

