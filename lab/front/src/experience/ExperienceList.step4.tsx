import React from 'react';
import styles from './ExperienceList.module.css';
import { Experience } from '../model/experience';

async function fetchExperiences(filter?: string): Promise<Experience[]> {
  const result = await fetch(
    `http://localhost:3001/list/experience/${filter || ''}`,
  );
  const { response } = await result.json();
  return response;
}

interface State {
  experiences: Experience[];
}

class ExperienceList extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      experiences: [],
    };
  }
  async componentDidMount() {
    const experiences = await fetchExperiences();
    this.setState({
      experiences,
    });
  }

  async filterList(filter?: string) {
    const experiences = await fetchExperiences(filter);
    this.setState({ experiences });
  }

  render() {
    return (
      <div className={styles['list-main-container']}>
        <div className={styles['filter-container']}>
          <input
            className={styles['filter-input']}
            onChange={async ({ target: { value: filter } }) => {
              this.setState({ filter });
            }}
          />
        </div>
        <div className={styles['list-container']}>
          {this.state.experiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience.id} />
          ))}
        </div>
      </div>
    );
  }
}

const ExperienceSummary = ({
  experience: { name, organisation, expertise },
}: {
  experience: Experience;
}) => (
  <>
    <h5 className={styles['name']}>{name}</h5>
    <p className={styles['expertise']}>{expertise}</p>
    <p className={styles['organisation-label']}>Team organisation</p>
    <p className={styles['text']}>{organisation}</p>
    <p className={styles['more-about']}>More about</p>
  </>
);

export default ExperienceList;
