import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.info}>
            <h2>Let’s talk about your project</h2>
            <p>
              Tell us about your idea and we’ll get back to you within 24 hours.
            </p>

            <div className={styles.details}>
              <p>Email: hello@novabuild.dev</p>
              <p>Location: Europe</p>
            </div>
          </div>

          <form className={styles.form}>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea
              placeholder="Tell us about your project"
              rows="4"
              required
            />
            <button type="submit" className="btn-primary">Get in touch</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact