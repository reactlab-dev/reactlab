import React, { useState } from 'react';
import styles from './ExperienceList.module.css';
import { Experience } from '../model';
import Details from './ExperienceDetails';

async function fetchExperiences(filter?: string): Promise<Experience[]> {
  const result = await fetch(
    `http://localhost:3001/list/experience/${filter || ''}`
  );
  const { response } = await result.json();
  return response;
}

interface ExperienceListState {
  filter?: string;
}
class ExperienceList extends React.Component<{}, ExperienceListState> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  filterList(filter?: string) {
    this.setState({ filter });
  }

  render() {
    const ConnectedList = connectDataProvider(
      DefaultListContainer,
      this.state.filter
    );
    return (
      <div className={styles['list-main-container']}>
        <div>
          Filter :
          <input
            className={styles['input']}
            onChange={({ target: { value } }) => {
              this.filterList(value);
            }}
          />
        </div>
        <ConnectedList />
      </div>
    );
  }
}

function connectDataProvider(
  Composed: React.ComponentType<{ experiences: Experience[] }>,
  filter?: string
): React.ComponentClass<{}> {
  return class extends React.Component<{}, { experiences: Experience[] }> {
    constructor(props: {}) {
      super(props);
      this.state = {
        experiences: []
      };
    }
    async componentDidMount() {
      const experiences = await fetchExperiences(filter);
      this.setState({
        experiences
      });
    }

    render() {
      return <Composed experiences={this.state.experiences} />;
    }
  };
}

const DefaultListContainer = ({
  experiences
}: {
  experiences: Experience[];
}) => {
  const [detailsShowedExperienceId, setDetailsShowedExperienceId] = useState();
  return (
    <div className={styles['list-container']}>
      {experiences.map(experience => (
        <ExperienceCard
          experience={experience}
          key={experience.id}
          showDetails={detailsShowedExperienceId === experience.id}
          onClick={() => {
            setDetailsShowedExperienceId(
              detailsShowedExperienceId !== experience.id
                ? experience.id
                : undefined
            );
          }}
        />
      ))}
    </div>
  );
};

const ExperienceCard = ({
  experience,
  showDetails,
  onClick
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
  experience: { name, description, location, organisation }
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
