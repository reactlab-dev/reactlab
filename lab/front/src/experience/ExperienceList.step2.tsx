import React from 'react';
import styles from './ExperienceList.module.css';
import { Experience } from '../model/experience';

const experiences: Experience[] = require('../data/experiences.json');

function ExperienceList() {
  return (
    <div className={styles['list-main-container']}>
      <div className={styles['list-container']}>
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
    </div>
  );
}

const ExperienceCard = ({
  experience: { id, name, description, organisation, location },
}: {
  experience: Experience;
}) => (
  <div className={styles['experience-card']} key={id}>
    <h5 className={styles['name']}>{name}</h5>
    <p className={styles['text']}>{description}</p>
    <p className={styles['text']}>{organisation}</p>
    <p className={styles['location']}>{location}</p>
  </div>
);

export default ExperienceList;
