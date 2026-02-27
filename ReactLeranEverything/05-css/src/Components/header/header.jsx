
import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.logo}>Wel-come to the css file </h3>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header