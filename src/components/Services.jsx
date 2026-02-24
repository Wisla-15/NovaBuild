import styles from './Services.module.css'

const services = [
  {
    title: 'Web Development',
    description:
      'Modern, fast and scalable websites built with the latest technologies.',
  },
  {
    title: 'UI / UX Design',
    description:
      'Clean, intuitive interfaces focused on usability and user experience.',
  },
  {
    title: 'Consulting',
    description:
      'Helping you choose the right solutions and plan digital products.',
  },
]

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <h2>Our services</h2>

        <div className={styles.grid}>
          {services.map(service => (
            <div key={service.title} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
