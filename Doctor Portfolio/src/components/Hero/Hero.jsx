import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {
    const [bioOpen, setBioOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200, // Duration of the animation
            easing: 'ease-in-out', // Easing for the animation
            once: false, // Set to false to allow the animation to happen multiple times
        });

        // Add an event listener to refresh AOS animations on scroll
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <h1 className={styles.title} data-aos="fade-right">
                    ENT TRAINEE SURGEON
                    <p>(Higher Specialty Trainee in Otolaryngology and Head and Neck Surgery)</p>
                </h1>

                <p className={styles.description} data-aos="fade-left">
                    MBBS, MRCS- ENT (Edin)
                </p>
                <div className={styles.actionButtons} data-aos="fade-up">
                    <button className={styles.downloadCvBtn} onClick={handleDownloadCV}>
                        Download CV
                    </button>
                    <button className={styles.sendMessageBtn} onClick={handleSendMessage}>
                        Send Message   →
                    </button>
                </div>

                <div className={styles.buttonContainer} data-aos="fade-up">
                    <p>Mr. Hussain is a UK HST in Otolaryngology and Head and Neck Surgery based in West Midlands, United Kingdom.</p>
                    <button
                        className={styles.readBioBtn}
                        onClick={() => setBioOpen(!bioOpen)}
                    >
                        {bioOpen ? 'Hide' : 'Testimonial\t→'}
                    </button>
                </div>

                {bioOpen && (
                    <div className={styles.bioContent} data-aos="fade-down">
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

            <img
                src={getImageUrl('hero/photo.jpg')}
                alt="hero image of Dr. Syed Zohaib Maroof Hussain"
                className={styles.heroImg}
                data-aos="zoom-in-up"
            />
            <div className={styles.topblur} />
            <div className={styles.bottomblur} />
        </section>
    );
};
