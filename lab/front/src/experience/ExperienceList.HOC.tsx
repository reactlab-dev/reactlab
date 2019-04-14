import React, { useState } from 'react';
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
  }
  render() {
    return (
      <div className={styles['list-main-container']}>
        <ConnectedList />
      </div>
    );
  }
}

const DefaultListContainer = ({
  experiences,
}: {
  experiences: Experience[];
}) => {
  const [detailsShowedExperienceId, setDetailsShowedExperienceId] = useState();
  return (
    <div className={styles['list-container']}>
      {experiences.map((experience) => (
        <ExperienceCard
          experience={experience}
          key={experience.id}
          showDetails={detailsShowedExperienceId === experience.id}
          onClick={() => {
            setDetailsShowedExperienceId(
              detailsShowedExperienceId !== experience.id
                ? experience.id
                : undefined,
            );
          }}
        />
      ))}
    </div>
  );
};

function connectDataProvider(
  Composed: React.ComponentType<any>,
): React.ComponentClass<any> {
  return class test extends React.Component<{}, { experiences: Experience[] }> {
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
        <>
          <div>
            Filter :
            <input
              className={styles['input']}
              onChange={async ({ target: { value } }) => {
                this.filterList(value);
              }}
            />
          </div>
          <Composed experiences={this.state.experiences} />
        </>
      );
    }
  };
}

const ConnectedList = connectDataProvider(DefaultListContainer);

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
      <ExperienceSummary experience={experience} />
    )}
  </div>
);

const ExperienceSummary = ({
  experience: { name, description, location, organisation },
}: {
  experience: Experience;
}) => (
  <>
    <h5 className={styles['name']}>{name}</h5>
    <p className={styles['text']}>{description}</p>
    <p className={styles['text']}>{organisation}</p>
    <p className={styles['location']}>{location}</p>
  </>
);

export default ExperienceList;
