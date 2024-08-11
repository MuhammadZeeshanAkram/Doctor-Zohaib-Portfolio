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
                        {bioOpen ? 'Hide Biography' : 'Read Biography'}
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
                        <p><strong>Dr. Syed Zohaib Maroof Hussain, MBBS, MSc ENT, MRCS, MRCOphth</strong></p>

<p>Dr. Syed Zohaib Maroof Hussain is a dedicated and accomplished <strong>Otolaryngologist (ENT Surgeon)</strong> with a strong foundation in both surgical practice and academic excellence. He completed his MBBS from <strong>Liaquat University of Medical & Health Sciences (LUMHS)</strong> in Jamshoro, Pakistan, where he developed a keen interest in the field of ENT. Driven by a passion for furthering his expertise, he pursued an MSc in ENT, Head & Neck Surgery at <strong>Anglia Ruskin University</strong> in Chelmsford, UK.</p>

<p>Dr. Hussain is currently serving as a <strong>Core Surgical Trainee at the University Hospitals of Leicester NHS Trust</strong>, where he is gaining invaluable experience in Otolaryngology. His commitment to the field is evident through his successful completion of the MRCS (Membership of the Royal College of Surgeons) and MRCOphth (Membership of the Royal College of Ophthalmologists) qualifications in the UK.</p>

<p>With a strong academic background and hands-on surgical experience, Dr. Hussain is well on his way to becoming a leading specialist in Otolaryngology. He is deeply committed to providing the highest quality of care to his patients and is continuously seeking opportunities to enhance his skills and knowledge in the ever-evolving field of ENT surgery.</p>

                    </div>
                )}
            </div>
            
            <img src={getImageUrl('hero/heroImage.png')} alt="hero image of me" className={styles.heroImg}/>
            <div className={styles.topblur}/>
            <div className={styles.bottomblur}/>
        </section>
    );
}
