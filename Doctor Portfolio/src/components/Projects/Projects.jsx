import React from 'react';
import researches from '../../data/history2.json';
import styles from "./Projects.module.css";
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section className={styles.container} id='researches'>
        <h2 className={styles.title}>
            Research
        </h2>
        <div className={styles.researches}>{researches.map((research,id)=>{
            return(
                <ProjectCard key={id} research={research}/>
            )
        })}</div>
        
    </section>
  )
}
