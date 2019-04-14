import React from 'react';
import styles from './ExperienceList.module.css';
import { Experience } from '../model/experience';
import Details from './ExperienceDetails';

async function fetchExperiences(filter?: string): Promise<Experience[]> {
  const result = await fetch(
    `http://localhost:3001/list/experience/${filter || ''}`,
  );
  const { response } = await result.json();
  return response;
}

interface State {
  experiences: Experience[];
  detailsShowedExperienceId?: string;
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
        <div>
          Filter :
          <input
            className={styles['input']}
            onChange={async ({ target: { value } }) => {
              this.filterList(value);
            }}
          />
        </div>
        <div className={styles['list-container']}>
          {this.state.experiences.map((experience) => (
            <ExperienceCard
              experience={experience}
              key={experience.id}
              showDetails={
                this.state.detailsShowedExperienceId === experience.id
              }
              onClick={() => {
                this.setState({
                  detailsShowedExperienceId:
                    this.state.detailsShowedExperienceId !== experience.id
                      ? experience.id
                      : undefined,
                });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

const ExperienceCard = ({
  experience,
  showDetails,
  onClick,
}: {
  experience: Experience;
  showDetails?: boolean;
  onClick?: () => void;
}) => (
  <div
    className={styles['experience-card']}
    onClick={() => (onClick ? onClick() : undefined)}
  >
    {showDetails ? (
      <Details experience={experience} />
    ) : (
      <div>
        <h5 className={styles['name']}>{experience.name}</h5>
        <p className={styles['text']}>{experience.description}</p>
        <p className={styles['text']}>{experience.organisation}</p>
        <p className={styles['location']}>{experience.location}</p>
      </div>
    )}
  </div>
);

export default ExperienceList;
