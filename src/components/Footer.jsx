import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3>NovaBuild</h3>
            <p>
              We build modern digital products for ambitious businesses.
            </p>
          </div>

          <div className={styles.links}>
            <div>
              <h4>Navigation</h4>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <h4>Contact</h4>
              <p>hello@novabuild.dev</p>
              <p>Europe</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} NovaBuild. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;