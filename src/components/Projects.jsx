import Section from './Section';
import './Projects.css';

const PLACEHOLDER_PROJECTS = [
  { title: 'Project one', description: 'Short description and tech used.', link: '#', linkLabel: 'View' },
  { title: 'Project two', description: 'Another project summary.', link: '#', linkLabel: 'View' },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {PLACEHOLDER_PROJECTS.map((project, i) => (
          <div key={i} className="card project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <a href={project.link} className="project-link">
              {project.linkLabel} →
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
