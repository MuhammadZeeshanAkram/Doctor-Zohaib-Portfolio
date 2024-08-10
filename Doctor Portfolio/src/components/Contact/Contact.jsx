import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          <a href="mailto:zohaibbhai@gmail">mailto:zohaibbhai@gmail</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin icon"  />
          <a href="https://www.linkedin.com/in/zohaibbhai">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon"  />
          <a href="https://github.com/zohaibbhai">github.com/zohaibbhai</a>
        </li>
      </ul>
    </footer>
  )
}
