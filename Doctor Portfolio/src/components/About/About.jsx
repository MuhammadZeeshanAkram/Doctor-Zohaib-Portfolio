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
            <div className={styles.aboutItemText}>
              <h3>Academic Journey</h3>
              <p>Dr. Syed Zohaib Maroof Hussain has a robust academic background in medicine and surgery...</p>
              {expandedSection === 'academic' && (
                <div className={styles.additionalInfo}>
                  <ul>
                    <li>
                      <strong>Education:</strong>
                      <ul>
                        <li>MRCS(Ed) ENT, Royal College of Surgeons of Edinburgh, November 2021</li>
                        <li>PgCert in Clinical Education: Enrolled 2021-2022, University of East Anglia, UK</li>
                        <li>PLAB, General Medical Council, UK, 4th of March 2020</li>
                        <li>MBBS, Dow University of Health Sciences, 2012-2017</li>
                        <li>USMLE Step 2 Clinical Skills, ECFMG, USA, December 2016</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Medical Electives:</strong>
                      <ul>
                        <li>Royal London Hospital, London, UK: 8 weeks of clinical observership in Department of ENT (December 2019 - February 2020)</li>
                        <li>Duke University Hospital, USA: 2 weeks clinical observership in Department of Pulmonology (August-September 2016)</li>
                        <li>University of California, San Diego, USA: 4 weeks sub-internship in Department of Oncology & Haematology (March 2016)</li>
                        <li>University of Minnesota, Minneapolis, USA: 2 weeks clinical observership in Department of Plastic & Reconstructive Surgery (February 2016)</li>
                        <li>Princeton Brain and Spine Care, New Jersey, USA: 4 weeks clinical externship in Department of Neurosurgery (January 2016)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleClick('professional')}>
            <div className={styles.aboutItemText}>
              <h3>Professional Journey</h3>
              <p>Dr. Syed Zohaib Maroof Hussain is a dedicated ENT Surgeon currently serving as a Core Surgical Trainee at the University Hospitals of Leicester NHS Trust. He plays a crucial role in advancing clinical practice and patient care in Otolaryngology...</p>
              {expandedSection === 'professional' && (
                <div className={styles.additionalInfo}>
                  <ul>
                    <li>
                      <strong>Core Surgical Trainee, University Hospitals of Leicester NHS Trust:</strong>
                      <p>Acquiring advanced skills and experience in Otolaryngology.</p>
                    </li>
                    <li>
                      <strong>Facility and Fatigue Lead, Norfolk and Norwich University Hospital:</strong>
                      <p>Manages facility operations and staff well-being.</p>
                    </li>
                    <li>
                      <strong>Lead for Junior Doctors On-Call Rota:</strong>
                      <p>Oversees on-call scheduling and coordination.</p>
                    </li>
                    <li>
                      <strong>Undergraduate ENT Teaching Coordinator:</strong>
                      <p>Organizes and manages ENT education for medical students.</p>
                    </li>
                  </ul>
                  <p>Dr. Hussain holds significant postgraduate qualifications, including MRCS (Royal College of Surgeons) and PLAB (General Medical Council). His global clinical experience spans top institutions like the Royal London Hospital and Duke University Hospital, enriching his practice with diverse insights.</p>
                  <p>Active in research and audits, Dr. Hussain contributes to advancing medical knowledge and improving clinical standards. His career reflects a steadfast commitment to excellence in patient care, education, and surgical practice.</p>
                </div>
              )}
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleClick('keyAchievements')}>
            <div className={styles.aboutItemText}>
              <h3>Key Achievements</h3>
              <p>Dr. Syed Zohaib Maroof Hussain has achieved several notable qualifications and contributions...</p>
              {expandedSection === 'keyAchievements' && (
                <div className={styles.additionalInfo}>
                  <ul>
                    <li>
                      <strong>Postgraduate Qualifications:</strong>
                      <ul>
                        <li>MRCS(Ed) ENT, Royal College of Surgeons of Edinburgh, 2021.</li>
                        <li>PLAB, GMC, March 2020.</li>
                        <li>USMLE Step 2 CS, ECFMG, December 2016.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Research:</strong>
                      <ul>
                        <li>Publications: 32</li>
                        <li>Submitted/Accepted: 2</li>
                        <li>On-going research: 3</li>
                        <li>Clinical Audit: 11</li>
                        <li>Presentations: 12 national and international</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Leadership and Management:</strong>
                      <ul>
                        <li>Facility and fatigue lead at Norfolk and Norwich University Hospital</li>
                        <li>Lead for junior doctors on-call rota</li>
                        <li>Management and organisation of undergraduate ENT teaching at Medical School and Secondary care timetabling for Norfolk & Norwich University Hospital</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Teaching:</strong>
                      <ul>
                        <li>Heavily involved in undergraduate teaching at Norwich Medical School, including examining.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Prizes & Grants:</strong>
                      <ul>
                        <li>Best teacher of 2019 for 1st year MBBS.</li>
                        <li>Islamic Institute of Studies New Jersey Scholarship and Abdul Qadir Khan Scholarship.</li>
                        <li>Received a scholarship in 9th and 10th grade.</li>
                        <li>1st prize for presenting audit at APPNE Annual Academic Convention, 20th Nov 2021.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li className={styles.aboutItem} onClick={() => handleClick('career')}>
            <div className={styles.aboutItemText}>
              <h3>Career Goals</h3>
              <p>Dr. Syed Zohaib Maroof Hussain is dedicated to shaping the future of Otolaryngology through...</p>
              {expandedSection === 'career' && (
                <div className={styles.additionalInfo}>
                  <ul>
                    <li>
                      <strong>Expertise in Minimally Invasive Techniques:</strong>
                      <p>Aiming to lead advancements in minimally invasive ENT procedures and enhance patient outcomes.</p>
                    </li>
                    <li>
                      <strong>Leadership in Medical Research:</strong>
                      <p>Contributing to significant advancements in ENT surgery and improving clinical practices globally.</p>
                    </li>
                    <li>
                      <strong>Educational Excellence:</strong>
                      <p>Innovating teaching methods and mentoring the next generation of ENT specialists.</p>
                    </li>
                    <li>
                      <strong>Establishing a Premier Practice:</strong>
                      <p>Creating a leading ENT practice known for cutting-edge treatments and exceptional patient care.</p>
                    </li>
                    <li>
                      <strong>Global Professional Network:</strong>
                      <p>Engaging with international peers and contributing to global conferences to advance ENT care.</p>
                    </li>
                  </ul>
                  <p>Driven by a commitment to innovation and excellence, Dr. Hussain is poised to make a significant impact in the field of Otolaryngology.</p>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
