import Section from './Section';
import { useFadeIn } from '../hooks/useFadeIn';
import './Skills.css';

const TECHNICAL_SKILLS = [
  'Automation',
  'AI',
  'Scripting',
  'AWS',
  'CI/CD',
  'SQL',
  'Data analysis',
];

const SOFT_SKILLS = [
  'Optimistic',
  'Resourceful',
  'Adaptability',
  'Teamwork & Collaboration',
];

function SkillsGroup({ title, skills }) {
  const [groupRef, isVisible] = useFadeIn({ rootMargin: '0px 0px -30px 0px' });

  return (
    <div ref={groupRef} className={`skills-group ${isVisible ? 'fade-in' : ''}`}>
      <h3 className="skills-group-title">{title}</h3>
      <div className="skills-wrap">
        {skills.map((skill, i) => (
          <span key={i} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <SkillsGroup title="Technical" skills={TECHNICAL_SKILLS} />
      <SkillsGroup title="Soft skills" skills={SOFT_SKILLS} />
    </Section>
  );
}
