import './Section.css';

export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
