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

class ExperienceList extends React.Component<{}, { filter?: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles['list-main-container']}>
        <div>
          Filter :
          <input
            className={styles['input']}
            onChange={async ({ target: { value } }) => {
              this.setState({ filter: value });
            }}
          />
        </div>
        <FilteredExperienceList filter={this.state.filter} />
      </div>
    );
  }
}

interface State {
  experiences: Experience[];
  detailsShowedExperienceId?: string;
}

class FilteredExperienceList extends React.Component<
  { filter?: string },
  State
> {
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
  async componentDidUpdate(prevProps: { filter?: string }) {
    if (prevProps !== this.props) {
      this.filterList(this.props.filter);
    }
  }

  async filterList(filter?: string) {
    const experiences = await fetchExperiences(filter);
    this.setState({ experiences });
  }

  render() {
    return (
      <div className={styles['list-container']}>
        {this.state.experiences.map((experience) => (
          <ExperienceCard
            experience={experience}
            key={experience.id}
            showDetails={this.state.detailsShowedExperienceId === experience.id}
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
