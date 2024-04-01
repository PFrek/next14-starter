import React from 'react';
import Links from './links/Links';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar