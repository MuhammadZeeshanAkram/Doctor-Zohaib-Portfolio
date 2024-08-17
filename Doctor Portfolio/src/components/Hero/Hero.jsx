import React, { useState } from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    const [bioOpen, setBioOpen] = useState(false);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = getImageUrl('cv/Zohaib_CV_24.pdf'); // Assuming getImageUrl is used to get the CV file URL
        link.download = 'Dr_Syed_Zohaib_Maroof_Hussain_CV.pdf'; // Name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSendMessage = () => {
        window.location.href = 'mailto:syedzohaibmaroof@hotmail.com';
    };

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    ENT SURGEON
                    <p>(Specialist in Ear, Nose, and Throat Surgery)</p>
                </h1>

                <p className={styles.description}>
                    MBBS (Dow University of Health Sciences), MRCS(Ed) ENT (Royal College of Surgeons of Edinburgh), PLAB (General Medical Council, UK), USMLE Step 2 CS (Educational Commission for Foreign Medical Graduates, USA)
                </p>
                <div className={styles.actionButtons}>
                    <button className={styles.downloadCvBtn} onClick={handleDownloadCV}>
                        Download CV
                    </button>
                    <button className={styles.sendMessageBtn} onClick={handleSendMessage}>
                        Send Message   →
                    </button>
                </div>

                <div className={styles.buttonContainer}>
                    <p>Dr. Syed Zohaib Maroof Hussain is a British-trained ENT Surgeon specializing in advanced Otolaryngology techniques, currently based in Leicester, UK.</p>
                    <button
                        className={styles.readBioBtn}
                        onClick={() => setBioOpen(!bioOpen)}
                    >
                        {bioOpen ? 'Hide' : 'Testimonial\t→'}
                    </button>
                </div>

            

            {bioOpen && (
               <div className={styles.bioContent}>
               <h2 style={{ marginBottom: '16px' }}>Dr. Syed Zohaib Maroof Hussain, MBBS, MRCS, PLAB, USMLE Step 2 CS</h2>
               <p style={{ marginBottom: '16px' }}>
                   <strong>Dr. Syed Zohaib Maroof Hussain</strong> is a leading ENT Surgeon with an MBBS from Dow University of Health Sciences and advanced qualifications including <strong>MRCS</strong>, <strong>PLAB</strong>, and <strong>USMLE Step 2 CS</strong>.
               </p>
               <p style={{ marginBottom: '16px' }}>
                   He is currently a <strong>Core Surgical Trainee</strong> at the University Hospitals of Leicester NHS Trust, where he is enhancing his expertise in Otolaryngology.
               </p>
               <p style={{ marginBottom: '16px' }}>
                   Dr. Hussain is dedicated to integrating innovative research with high-quality patient care and is committed to advancing the field of ENT surgery through his clinical and academic work.
               </p>
           </div>
           
            
            )}
           </div>




            <img src={getImageUrl('hero/zohaib bhai.jpg')} alt="hero image of me" className={styles.heroImg} />
            <div className={styles.topblur} />
            <div className={styles.bottomblur} />
        </section>
    );
}
