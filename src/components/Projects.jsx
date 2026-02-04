import Section from './Section';
import { useFadeIn } from '../hooks/useFadeIn';
import './Projects.css';

const PLACEHOLDER_PROJECTS = [
  { title: 'Project one', description: 'Short description and tech used.', link: '#', linkLabel: 'View' },
  { title: 'Project two', description: 'Another project summary.', link: '#', linkLabel: 'View' },
];

function ProjectCard({ project, index }) {
  const [cardRef, isVisible] = useFadeIn({ rootMargin: '0px 0px -30px 0px' });

  return (
    <div ref={cardRef} className={`card project-card ${isVisible ? 'fade-in' : ''}`}>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <a href={project.link} className="project-link">
        {project.linkLabel} →
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {PLACEHOLDER_PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
