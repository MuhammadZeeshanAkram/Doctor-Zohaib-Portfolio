import React from 'react';
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  research: { type, description, skills }
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.type}>{type}</h3>
      
      {/* Render each line of the description in its own paragraph */}
      <div className={styles.description}>
        {description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
