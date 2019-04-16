import React from 'react';
import styles from './ExperienceList.module.css';
import { Experience } from '../model/experience';

const experiences: Experience[] = require('../data/experiences.json');

function ExperienceList() {
  return (
    <div className={styles['list-main-container']}>
      <div className={styles['list-container']}>
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
}

const ExperienceCard = ({
  experience: { name, organisation, expertise },
}: {
  experience: Experience;
}) => (
  <div className={styles['experience-card']}>
    <h5 className={styles['name']}>{name}</h5>
    <p className={styles['expertise']}>{expertise}</p>
    <p className={styles['organisation-label']}>Team organisation</p>
    <p className={styles['text']}>{organisation}</p>
    <p className={styles['more-about']}>More about</p>
  </div>
);

export default ExperienceList;
