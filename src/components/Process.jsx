import styles from './Process.module.css'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We analyze your business goals, target audience and requirements.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We design intuitive interfaces focused on usability and clarity.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We build scalable and high-performance digital products.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We deploy, test and support your product after release.',
  },
]

const Process = () => {
  return (
    <section className={styles.section} id='process'>
      <div className="container">
        <h2>Our process</h2>

        <div className={styles.grid}>
          {steps.map(step => (
            <div key={step.number} className={styles.card}>
              <span className={styles.number}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process;