import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zohaib</h1>
        <p className={styles.description}>hey i am react js developer with 25 years of experience and proficient in mern stack reach out if wanted</p>
        <a href='mailto:zohaibbhai@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="hero image of me"  className={styles.heroImg}/>
        <div className={styles.topblur}/>
        <div className={styles.bottomblur}/>
    </section>
  )
}
