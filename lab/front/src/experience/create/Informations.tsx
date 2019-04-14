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
        <label className={styles['label']}>Name :</label>

        <input
          value={this.state.name}
          placeholder='Name'
          className={styles['input']}
          onChange={({ target: { value: name } }) => {
            this.setState({ name });
          }}
        />
        <label className={styles['label']}>Description :</label>

        <input
          className={styles['input']}
          value={this.state.description}
          placeholder='Description'
          onChange={({ target: { value: description } }) => {
            this.setState({ description });
          }}
        />
        <label className={styles['label']}>Organisation :</label>

        <textarea
          className={styles['textarea']}
          value={this.state.organisation}
          placeholder='Organisation'
          onChange={({ target: { value: organisation } }) => {
            this.setState({ organisation });
          }}
        />
        <label className={styles['label']}>Location :</label>
        <textarea
          className={styles['textarea']}
          value={this.state.location}
          placeholder='Location'
          onChange={({ target: { value: location } }) => {
            this.setState({ location });
          }}
        />

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

        <div className={styles['practices-container']}>
          {this.state.practices.map((practice, indexToFound) => (
            <div data-testid='practices' key={`${practice}-${indexToFound}`}>
              <span>{practice}</span>
              <span
                onClick={() => {
                  const practices = this.state.practices.reduce(
                    (acc: string[], practice, index) => {
                      return indexToFound !== index ? [...acc, practice] : acc;
                    },
                    [],
                  );
                  this.setState({ practices });
                }}
              >
                x
              </span>
            </div>
          ))}
        </div>

        <label className={styles['label']} />
        <Link to='/experience/create/team'>
          <button
            className={styles['button']}
            onClick={() => {
              this.props.onChange(this.state);
            }}
          >
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Informations;
