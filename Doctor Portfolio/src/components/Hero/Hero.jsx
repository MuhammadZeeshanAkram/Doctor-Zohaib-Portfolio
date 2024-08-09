import React from 'react';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section>
        <div>
        <h1>Hi, I'm Zohaib</h1>
        <p>hey i am react js developer with 25 years of experience and proficient in mern stack reach out if wanted</p>
        <a href='mailto:zohaibbhai@gmail.com'>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="hero image of me" />
        
    </section>
  )
}
