import Section from './Section';
import { useFadeIn } from '../hooks/useFadeIn';
import './Skills.css';

const SKILL_COLOR_PALETTE = [
  { bg: 'rgba(14, 165, 233, 0.12)', border: 'rgba(14, 165, 233, 0.35)', text: '#7dd3fc' }, // sky
  { bg: 'rgba(168, 85, 247, 0.12)', border: 'rgba(168, 85, 247, 0.35)', text: '#d8b4fe' }, // purple
  { bg: 'rgba(34, 197, 94, 0.12)', border: 'rgba(34, 197, 94, 0.35)', text: '#86efac' }, // green
  { bg: 'rgba(245, 158, 11, 0.12)', border: 'rgba(245, 158, 11, 0.35)', text: '#fcd34d' }, // amber
  { bg: 'rgba(244, 63, 94, 0.12)', border: 'rgba(244, 63, 94, 0.35)', text: '#fda4af' }, // rose
  { bg: 'rgba(99, 102, 241, 0.12)', border: 'rgba(99, 102, 241, 0.35)', text: '#c7d2fe' }, // indigo
  { bg: 'rgba(20, 184, 166, 0.12)', border: 'rgba(20, 184, 166, 0.35)', text: '#5eead4' }, // teal
  { bg: 'rgba(234, 179, 8, 0.12)', border: 'rgba(234, 179, 8, 0.35)', text: '#fde68a' }, // yellow
  { bg: 'rgba(239, 68, 68, 0.12)', border: 'rgba(239, 68, 68, 0.35)', text: '#fecaca' }, // red
  { bg: 'rgba(16, 185, 129, 0.12)', border: 'rgba(16, 185, 129, 0.35)', text: '#6ee7b7' }, // emerald
  { bg: 'rgba(6, 182, 212, 0.12)', border: 'rgba(6, 182, 212, 0.35)', text: '#67e8f9' }, // cyan
  { bg: 'rgba(251, 113, 133, 0.12)', border: 'rgba(251, 113, 133, 0.35)', text: '#fecdd3' }, // pink
];

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

function hashStringToIndex(value, modulo) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return modulo === 0 ? 0 : hash % modulo;
}

function SkillTag({ label }) {
  const idx = hashStringToIndex(label, SKILL_COLOR_PALETTE.length);
  const c = SKILL_COLOR_PALETTE[idx];

  return (
    <span
      className="skill-tag"
      style={{
        '--skill-bg': c.bg,
        '--skill-border': c.border,
        '--skill-text': c.text,
      }}
    >
      {label}
    </span>
  );
}

function SkillsGroup({ title, skills }) {
  const [groupRef, isVisible] = useFadeIn({ rootMargin: '0px 0px -30px 0px' });

  return (
    <div ref={groupRef} className={`skills-group ${isVisible ? 'fade-in' : ''}`}>
      <h3 className="skills-group-title">{title}</h3>
      <div className="skills-wrap">
        {skills.map((skill, i) => (
          <SkillTag key={`${title}-${i}`} label={skill} />
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
