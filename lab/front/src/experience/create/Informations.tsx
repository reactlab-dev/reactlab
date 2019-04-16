import React from 'react';
import styles from './Informations.module.css';
import { Infos } from '../../model/experience';
import { Link } from 'react-router-dom';

interface Props {
  onChange: (infos: State) => void;
}

interface State extends Infos {}

class Informations extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      practices: [],
    };
  }
  render() {
    return (
      <div className={styles['information-container']}>
        <div className={styles['line-container']}>
          <div className={styles['input-container']}>
            <label className={styles['label']}>Company name</label>
            <input
              value={this.state.name}
              className={styles['input']}
              onChange={({ target: { value: name } }) => {
                this.setState({ name });
              }}
            />
          </div>
          <div className={styles['input-container']}>
            <label className={styles['label']}>Expertise </label>
            <select
              value={this.state.expertise}
              className={styles['select']}
              onChange={({ target: { value: expertise } }) => {
                this.setState({ expertise });
              }}
            >
              <option value='' />
              <option value='IT Project Manager'>IT Project Manager</option>
              <option value='Data Analyst'> Data Analyst</option>
              <option value='Data Scientist'> Data Scientist</option>
              <option value='Back-end Developer'> Back-end Developer</option>
              <option value='Front-end Developer'> Front-end Developer</option>
              <option value='Fullstack Developer'>Fullstack Developer</option>
              <option value='Mobile Developer'> Mobile Developer </option>
              <option value='CMS Developer'> CMS Developer</option>
              <option value='UI Designer'> UI Designer</option>
              <option value='UX Designer'> UX Designer</option>
              <option value='UX Researcher'> UX Researcher </option>
              <option value='Product Designer'> Product Designer</option>
              <option value='Product Manager'> Product Manager</option>
              <option value='Product Owner'> Product Owner</option>
              <option value='Interior Designer'> Interior Designer</option>
              <option value='Brand Manager'> Brand Manager</option>
              <option value='Community Manager'> Community Manager</option>
              <option value='Content Manager'> Content Manager</option>
              <option value='Copywriter'> Copywriter</option>
              <option value='Digital Project Manager'>
                Digital Project Manager
              </option>
              <option value='Artistic Director'> Artistic Director</option>
              <option value='Artistic Director'> Artistic Director</option>
              <option value='SEA Expert'> SEA Expert</option>
              <option value='SEO Expert'> SEO Expert</option>
              <option value='Growth Marketer'> Growth Marketer</option>
              <option value='Motion Designer'> Motion Designer</option>
              <option value='Social Media Manager'>Social Media Manager</option>
              <option value='Traffic Manager '> Traffic Manager </option>
              <option value='Web Marketer'> Web Marketer</option>
            </select>
          </div>
          <div className={styles['input-container']}>
            <label className={styles['label']}>Location </label>
            <input
              value={this.state.location}
              className={styles['input']}
              onChange={({ target: { value: location } }) => {
                this.setState({ location });
              }}
            />
          </div>
        </div>
        <div className={styles['line-container']}>
          <div className={styles['input-container']}>
            <label className={styles['label']}>Description :</label>

            <textarea
              className={styles['textarea']}
              value={this.state.description}
              onChange={({ target: { value: description } }) => {
                this.setState({ description });
              }}
            />
          </div>
          <div className={styles['input-container']}>
            <label className={styles['label']}>Organisation :</label>

            <textarea
              className={styles['textarea']}
              value={this.state.organisation}
              onChange={({ target: { value: organisation } }) => {
                this.setState({ organisation });
              }}
            />
          </div>
        </div>

        <div className={styles['line-container']}>
          <div
            className={`${styles['input-container']} ${styles['max-width']}`}
          >
            <label className={styles['label']}>Practices :</label>
            <select
              value=''
              className={styles['select']}
              onChange={({ target: { value } }) => {
                this.setState({ practices: [...this.state.practices, value] });
              }}
            >
              <option value='' />
              <option value='react'>react</option>
              <option value='node'>node</option>
              <option value='go'>go</option>
              <option value='angular'>angular</option>
              <option value='mob progamming'>mob progamming</option>
            </select>
          </div>

          <div className={styles['practices-container']}>
            {this.state.practices.map((practice, indexToFound) => (
              <div data-testid='practices' key={`${practice}-${indexToFound}`}>
                <span>{practice}</span>

                <img
                  src='/images/close_icon.png'
                  width='18'
                  onClick={() => {
                    const practices = this.state.practices.reduce(
                      (acc: string[], practice, index) => {
                        return indexToFound !== index
                          ? [...acc, practice]
                          : acc;
                      },
                      [],
                    );
                    this.setState({ practices });
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles['line-container']} ${styles['align-right']}`}>
          <Link to='/experience/create/team'>
            <button
              className={styles['button']}
              onClick={() => {
                this.props.onChange(this.state);
              }}
            >
              Next step
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Informations;
