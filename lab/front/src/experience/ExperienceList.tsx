import React from 'react';
import styles from './ExperienceList.module.css';
import { Experience } from '../model/experience';
import Details from './ExperienceDetails';
const { Provider, Consumer } = React.createContext<DataProviderContext>({
  experiences: [],
  onFilterChange: () => {},
});

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
      <DataProvider>
        <div className={styles['list-main-container']}>
          <Consumer>
            {(context: DataProviderContext) => (
              <div className={styles['filter-container']}>
                <input
                  className={styles['filter-input']}
                  onChange={async ({ target: { value: filter } }) => {
                    context.onFilterChange(filter);
                  }}
                />
              </div>
            )}
          </Consumer>
          <FilteredExperienceList />
        </div>
      </DataProvider>
    );
  }
}

interface DataProviderContext {
  experiences: Experience[];
  onFilterChange: (filter: string) => void;
}

class DataProvider extends React.Component<
  {},
  { experiences: Experience[]; filter?: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      experiences: [],
    };
  }

  async fetchExperiences() {
    const experiences = await fetchExperiences(this.state.filter);
    this.setState({
      experiences,
    });
  }

  async componentDidMount() {
    await this.fetchExperiences();
  }

  async componentDidUpdate(_prevProps: {}, prevState: { filter?: string }) {
    if (this.state.filter !== prevState.filter) {
      await this.fetchExperiences();
    }
  }

  render() {
    return (
      <Provider
        value={{
          experiences: this.state.experiences,
          onFilterChange: (filter: string) => {
            this.setState({ filter });
          },
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

interface State {
  detailsShowedExperienceId?: string;
}

class FilteredExperienceList extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles['list-container']}>
        <Consumer>
          {(context: DataProviderContext) =>
            context.experiences.map((experience) => (
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
            ))
          }
        </Consumer>
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
