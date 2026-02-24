import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.inner}>
        <h1>We build modern digital products</h1>

        <p className={styles.subtitle}>Webs, apps and interfaces that help businesses grow.</p>

        <div className={styles.actions}>
          <a href="#contact" className="btn-primary">Contact us</a>
          <a href="#projects" className="btn-secondary">Our work</a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
