import Section from './Section';
import { useFadeIn } from '../hooks/useFadeIn';
import './Skills.css';

const SKILL_COLOR_PALETTE = [
  { bg: 'rgba(14, 165, 233, 0.15)', border: 'rgba(14, 165, 233, 0.4)', text: '#0369a1' }, // sky - darker blue
  { bg: 'rgba(168, 85, 247, 0.15)', border: 'rgba(168, 85, 247, 0.4)', text: '#7c3aed' }, // purple - darker purple
  { bg: 'rgba(34, 197, 94, 0.15)', border: 'rgba(34, 197, 94, 0.4)', text: '#15803d' }, // green - darker green
  { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.4)', text: '#d97706' }, // amber - darker amber
  { bg: 'rgba(244, 63, 94, 0.15)', border: 'rgba(244, 63, 94, 0.4)', text: '#dc2626' }, // rose - darker red
  { bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.4)', text: '#4338ca' }, // indigo - darker indigo
  { bg: 'rgba(20, 184, 166, 0.15)', border: 'rgba(20, 184, 166, 0.4)', text: '#0d9488' }, // teal - darker teal
  { bg: 'rgba(234, 179, 8, 0.15)', border: 'rgba(234, 179, 8, 0.4)', text: '#ca8a04' }, // yellow - darker yellow
  { bg: 'rgba(239, 68, 68, 0.15)', border: 'rgba(239, 68, 68, 0.4)', text: '#b91c1c' }, // red - darker red
  { bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.4)', text: '#047857' }, // emerald - darker emerald
  { bg: 'rgba(6, 182, 212, 0.15)', border: 'rgba(6, 182, 212, 0.4)', text: '#0891b2' }, // cyan - darker cyan
  { bg: 'rgba(251, 113, 133, 0.15)', border: 'rgba(251, 113, 133, 0.4)', text: '#db2777' }, // pink - darker pink
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
