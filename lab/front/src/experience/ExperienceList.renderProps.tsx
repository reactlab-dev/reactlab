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

const ExperienceList = () => (
  <div className={styles['list-main-container']}>
    <ListDataProvider listDisplayer={DefaultListContainer} />
  </div>
);

interface ListDataProviderProps {
  listDisplayer: React.ComponentType<any>;
}
class ListDataProvider extends React.Component<ListDataProviderProps, State> {
  constructor(props: ListDataProviderProps) {
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
        <this.props.listDisplayer experiences={this.state.experiences} />
      </>
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
