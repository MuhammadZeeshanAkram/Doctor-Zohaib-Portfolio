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
                        {bioOpen ? 'Hide' : 'Testimonial  →'}
                    </button>
                    
                </div>
                
                {bioOpen && (
                    <div className={styles.bioContent}>
                       <h2>Dr. Syed Zohaib Maroof Hussain, MBBS, MRCS, PLAB, USMLE Step 2 CS</h2>
                        <p>Dr. Syed Zohaib Maroof Hussain is a distinguished ENT Surgeon with a stellar academic and professional trajectory. He completed his MBBS at Dow University of Health Sciences in Pakistan, where his passion for Otolaryngology was first ignited. Driven by a commitment to excellence, Dr. Hussain pursued advanced training in ENT, earning the MRCS from the Royal College of Surgeons of Edinburgh and PLAB certification from the General Medical Council of the UK.</p>
                        <p>Currently, Dr. Hussain serves as a Core Surgical Trainee at the University Hospitals of Leicester NHS Trust, where he is honing his expertise in Otolaryngology. His qualifications are complemented by the USMLE Step 2 CS, underscoring his broad competency in clinical skills.</p>
                        <p>Dr. Hussain's career is marked by a relentless pursuit of knowledge and a dedication to integrating cutting-edge research with clinical practice. His approach to patient care is both comprehensive and empathetic, focusing on delivering the highest standards of treatment while addressing the holistic needs of his patients.</p>
                        <p>With a robust foundation in both clinical practice and research, Dr. Hussain is poised to make significant contributions to the field of Otolaryngology. His commitment to advancing medical practice, combined with his passion for teaching and leadership, sets him apart as a future leader in ENT surgery.</p>
                    </div>
                )}
            </div>
            
            <img src={getImageUrl('hero/zohaib bhai.jpg')} alt="hero image of me" className={styles.heroImg}/>
            <div className={styles.topblur}/>
            <div className={styles.bottomblur}/>
        </section>
    );
}
