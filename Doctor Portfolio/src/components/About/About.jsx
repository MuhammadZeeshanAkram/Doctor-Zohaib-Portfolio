import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className={styles.container} id='biography'>
      <h2 className={styles.title}>Biography</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem} onClick={() => handleClick('academic')}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Academic Journey</h3>
              <p>Dr. Syed Zohaib Maroof Hussain began his medical education at Liaquat University...</p>
              {expandedSection === 'academic' && (
                <div className={styles.additionalInfo}>
                  {"of Medical & Health Sciences (LUMHS) in Jamshoro, Pakistan, where he earned his MBBS. This university, renowned for its contributions to medical science in Pakistan, played a pivotal role in shaping Dr. Hussain's early interest in Otolaryngology (ENT). His pursuit of excellence led him to the Anglia Ruskin University in Chelmsford, UK, where he specialized further by completing an MSc in ENT, Head & Neck Surgery. Anglia Ruskin University, a hub for advanced medical research and education, provided him with cutting-edge knowledge and clinical skills."}
                </div>
              )}
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleClick('professional')}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Professional Journey</h3>
              <p>Dr. Zohaib currently serves as a Core Surgical Trainee...</p>
              {expandedSection === 'professional' && (
                <div className={styles.additionalInfo}>
                  {"at the University Hospitals of Leicester NHS Trust in Leicester, UK. This prestigious institution is one of the largest teaching hospital trusts in the UK, known for its excellence in healthcare and medical education. During his time here, Dr. Hussain has gained significant experience in Otolaryngology, working alongside leading experts in the field. His qualifications, including the MRCS (Membership of the Royal College of Surgeons) and MRCOphth (Membership of the Royal College of Ophthalmologists), are a testament to his broad expertise and dedication to his profession."}
                </div>
              )}
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleClick('personal')}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Personal Interests</h3>
              <p>Outside professional commitments, Dr. Zohaib has a passion for photography...</p>
              {expandedSection === 'personal' && (
                <div className={styles.additionalInfo}>
                  {" He often captures the landscapes and cityscapes of the places he's traveled, such as the countryside of England and the historic sites of Pakistan. These photographs not only serve as a creative outlet but also help him maintain a balanced lifestyle. Dr. Hussain also enjoys engaging in medical education, often participating in workshops at institutions like Royal College of Surgeons of Edinburgh."}
                </div>
              )}
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleClick('career')}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Career Goals</h3>
              <p>Dr. Zohaib aspires to further his expertise in ENT surgery...</p>
              {expandedSection === 'career' && (
                <div className={styles.additionalInfo}>
                  {"with a focus on minimally invasive techniques at institutions like the Royal College of Surgeons in London, UK. His career goals include becoming a leading consultant in Otolaryngology and contributing to global medical research and education. He is particularly interested in establishing himself at a renowned medical institution such as Moorfields Eye Hospital in London, which is known for pioneering work in ophthalmology and ENT."}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
