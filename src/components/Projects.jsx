import styles from './Projects.module.css'

const projects = [
  {
    title: 'Fintech Dashboard',
    description:
      'A modern analytics dashboard for financial data visualization.',
    type: 'Web Application',
  },
  {
    title: 'Marketing Website',
    description:
      'High-converting marketing website for a SaaS startup.',
    type: 'Corporate Website',
  },
  {
    title: 'Internal Management Tool',
    description:
      'Custom tool for managing operations and team workflows.',
    type: 'Business Software',
  },
]

const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <h2>Selected projects</h2>

        <div className={styles.grid}>
          {projects.map(project => (
            <div key={project.title} className={styles.card}>
              <span className={styles.type}>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;