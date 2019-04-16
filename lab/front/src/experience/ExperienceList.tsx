import React from 'react';
import styles from './ExperienceList.module.css';
import { Experience } from '../model';
import Details from './ExperienceDetails';

async function fetchExperiences(filter?: string): Promise<Experience[]> {
  const result = await fetch(
    `https://z251j2o0xm.sse.codesandbox.io/list/experience/${filter || ''}`,
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
        {this.props.experiences.map(experience => (
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

export default ExperienceList;
