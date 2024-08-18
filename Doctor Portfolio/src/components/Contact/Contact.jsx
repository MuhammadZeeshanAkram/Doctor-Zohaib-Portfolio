import React from 'react';
import styles from './Contact.module.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.column}>
        <h2>Menu</h2>
        <nav className={styles.menu}>
          <ul>
            <li><a href="#biography">Biography</a></li>
            <li><a href="#experience">Experience</a></li>
            
            <li><a href="#researches">Research</a></li>
            
            
          </ul>
        </nav>
      </div>
      <div className={styles.column}>
        <h2>Contact</h2>
        <ul className={styles.links}>
          <li className={styles.link}>
            <MdOutlineEmail className={styles.icon} />
            <a href="mailto:syedzohaibmaroof@hotmail.com ">syedzohaibmaroof@hotmail.com </a>
          </li>
          <li className={styles.link}>
            <FaPhoneAlt className={styles.icon} />
            <a href="tel:+44 7304 030963">+44 7304 030963</a> {/* Make sure to replace with actual contact number */}
          </li>
        </ul>
      </div>
    </footer>
  );
}
