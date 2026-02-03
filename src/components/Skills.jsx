import Section from './Section';
import './Skills.css';

const PLACEHOLDER_SKILLS = [
  'Skill one',
  'Skill two',
  'Skill three',
  'Skill four',
  'Skill five',
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-wrap">
        {PLACEHOLDER_SKILLS.map((skill, i) => (
          <span key={i} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
