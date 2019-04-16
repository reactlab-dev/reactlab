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
        <div className={styles['filter-container']}>
          <input
            className={styles['filter-input']}
            onChange={async ({ target: { value: filter } }) => {
              this.setState({ filter });
            }}
          />
        </div>
        <ConnectedList filter={this.state.filter} />
      </div>
    );
  }
}

function connectDataProvider(
  Component: React.ComponentType<{ experiences: Experience[] }>,
): React.ComponentClass<{ filter?: string }> {
  return class extends React.Component<
    { filter?: string },
    { experiences: Experience[] }
  > {
    constructor(props: { filter?: string }) {
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

    async componentDidUpdate(prevProps: { filter?: string }) {
      if (this.props.filter !== prevProps.filter) {
        await this.fetchExperiences();
      }
    }

    render() {
      return <Component experiences={this.state.experiences} />;
    }
  };
}

interface State {
  detailsShowedExperienceId?: string;
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
const ConnectedList = connectDataProvider(FilteredExperienceList);
export default ExperienceList;
