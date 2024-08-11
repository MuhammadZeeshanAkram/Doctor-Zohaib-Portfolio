import React, { useState } from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    const [bioOpen, setBioOpen] = useState(false);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Core Surgical Trainee Specializing in Otolaryngology (ENT Surgery)</h1>
                <p className={styles.description}>MBBS (LUMHS, Jamshoro), MSc ENT (Chelmsford, UK), MRCS (UK), MRCOphth (UK)</p>
                
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.readBioBtn}
                        onClick={() => setBioOpen(!bioOpen)}
                    >
                        {bioOpen ? 'Hide' : 'About Me'}
                    </button>
                    <div className={styles.socialButtons}>
                        <a href="mailto:zohaibbhai@gmail.com" className={styles.mailBtn}>📧</a>
                        <a href="https://wa.me/your-number" className={styles.whatsappBtn}>💬</a>
                        <a href={getImageUrl('cv')} className={styles.downloadCvBtn}>📄</a>
                        <a href="https://linkedin.com/in/your-profile" className={styles.linkedinBtn}>🔗</a>
                    </div>
                </div>
                
                {bioOpen && (
                    <div className={styles.bioContent}>
                       <h2>Dr. Syed Zohaib Maroof Hussain, MBBS, MSc ENT, MRCS, MRCOphth</h2>

<p>Dr. Syed Zohaib Maroof Hussain is a highly skilled and accomplished Otolaryngologist (ENT Surgeon) with a robust academic background and extensive hands-on surgical experience. He earned his <strong>MBBS</strong> from <em>Liaquat University of Medical & Health Sciences (LUMHS)</em> in Jamshoro, Pakistan, where his profound interest in the field of ENT was first ignited. Driven by a passion for surgical excellence and a commitment to patient care, he pursued further specialization, obtaining an <strong>MSc in ENT, Head & Neck Surgery</strong> from <em>Anglia Ruskin University</em> in Chelmsford, UK.</p>

<p>Currently, Dr. Hussain is serving as a <strong>Core Surgical Trainee</strong> at the <em>University Hospitals of Leicester NHS Trust</em>, where he continues to gain invaluable experience in Otolaryngology. His dedication to his profession is underscored by his successful attainment of the <strong>MRCS (Membership of the Royal College of Surgeons)</strong> and <strong>MRCOphth (Membership of the Royal College of Ophthalmologists)</strong> qualifications in the UK, reflecting his broad expertise in both surgical disciplines.</p>

<p>Dr. Hussain is not only committed to advancing his surgical skills but is also deeply engaged in the academic aspects of his field. He is recognized for his ability to integrate cutting-edge research with clinical practice, ensuring that his patients receive the most effective and up-to-date treatments. His journey in medicine is marked by a relentless pursuit of knowledge and a dedication to the highest standards of patient care.</p>

<p>With a solid foundation in both clinical practice and academic research, Dr. Hussain is poised to become a leading figure in Otolaryngology. He is continually seeking new opportunities to expand his expertise, staying at the forefront of developments in ENT surgery. His approach to patient care is holistic, focusing on both the physical and emotional well-being of his patients, and he is committed to delivering the best possible outcomes for those under his care.</p>


                    </div>
                )}
            </div>
            
            <img src={getImageUrl('hero/heroImage.png')} alt="hero image of me" className={styles.heroImg}/>
            <div className={styles.topblur}/>
            <div className={styles.bottomblur}/>
        </section>
    );
}
