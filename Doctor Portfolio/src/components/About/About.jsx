import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../../utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './About.module.css';

export const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    getImageUrl('about/biography.jpg'),
    getImageUrl('hero/zohaib bhai.jpg'),
    getImageUrl('about/biography.jpg'),
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Whether animation should happen only once
    });

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      AOS.refresh(); // Refresh AOS to re-trigger animations
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const handleClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
    AOS.refresh(); // Refresh AOS to re-trigger animations
  };

  return (
    <section className={styles.container} id="biography">
      <h2 className={styles.title} data-aos="fade-down">Biography</h2>
      <div className={styles.content}>
       
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem} onClick={() => handleClick('academic')} data-aos="fade-right">
            <div className={styles.aboutItemText}>
              <h3>Academic Journey</h3>
              <p>Dr. Syed Zohaib Maroof Hussain has a robust academic background in medicine and surgery...</p>
              {expandedSection === 'academic' && (
                <div className={styles.additionalInfo} data-aos="fade-up">
                  {/* Academic details here */}
                </div>
              )}
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleClick('professional')} data-aos="fade-left">
            <div className={styles.aboutItemText}>
              <h3>Professional Journey</h3>
              <p>Dr. Syed Zohaib Maroof Hussain is a dedicated ENT Surgeon...</p>
              {expandedSection === 'professional' && (
                <div className={styles.additionalInfo} data-aos="fade-up">
                  {/* Professional details here */}
                </div>
              )}
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleClick('keyAchievements')} data-aos="fade-right">
            <div className={styles.aboutItemText}>
              <h3>Key Achievements</h3>
              <p>Dr. Syed Zohaib Maroof Hussain has achieved several notable qualifications...</p>
              {expandedSection === 'keyAchievements' && (
                <div className={styles.additionalInfo} data-aos="fade-up">
                  {/* Achievements details here */}
                </div>
              )}
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleClick('career')} data-aos="fade-left">
            <div className={styles.aboutItemText}>
              <h3>Career Goals</h3>
              <p>Dr. Syed Zohaib Maroof Hussain is dedicated to shaping the future of Otolaryngology through...</p>
              {expandedSection === 'career' && (
                <div className={styles.additionalInfo} data-aos="fade-up">
                  {/* Career details here */}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
