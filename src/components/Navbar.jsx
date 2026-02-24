import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.navbar}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>
            <img src="/logo.svg" alt="NovaBuild logo" height="32" />
          </a>

          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="btn-primary">Get in touch</a>
          </nav>

          <button className={styles.burger} onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar