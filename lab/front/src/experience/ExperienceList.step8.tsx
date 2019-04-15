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
        <ListDataProvider
          render={FilteredExperienceList}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

interface State {
  detailsShowedExperienceId?: string;
}

interface ListDataProviderState {
  experiences: Experience[];
}
interface ListDataProviderProps {
  filter?: string;
  render: React.ComponentType<{ experiences: Experience[] }>;
}
class ListDataProvider extends React.Component<
  ListDataProviderProps,
  ListDataProviderState
> {
  constructor(props: ListDataProviderProps) {
    super(props);
    this.state = {
      experiences: [],
    };
  }

  async fetchExperiences() {
    const experiences = await fetchExperiences(this.props.filter);
    this.setState({
      experiences,
    });
  }

  async componentDidMount() {
    await this.fetchExperiences();
  }

  async componentDidUpdate(prevProps: ListDataProviderProps) {
    if (this.props.filter !== prevProps.filter) {
      await this.fetchExperiences();
    }
  }

  render() {
    return React.createElement(this.props.render, {
      experiences: this.state.experiences,
    });
  }
}

class FilteredExperienceList extends React.Component<
  { experiences: Experience[] },
  State
> {
  constructor(props: { experiences: Experience[] }) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles['list-container']}>
        {this.props.experiences.map((experience) => (
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
