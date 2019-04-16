import React, { useState } from 'react';
import { People } from '../../model/experience';
import styles from './Team.module.css';

interface State {
  team: People[];
}

class Team extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      team: [],
    };
  }
  render() {
    return (
      <div className={styles['team-container']}>
        <label className={styles['title']}>Your team</label>

        <AddPeople
          onAdd={(people) => {
            this.setState({
              team: [...this.state.team, people],
            });
          }}
        />
        <div className={styles['people-container']}>
          {this.state.team.map(({ name, role }, indexToFound) => (
            <div
              className={styles['people']}
              key={`${name}+${indexToFound}+${role}`}
            >
              <span className={styles['people-name']}>{name} </span>
              <span className={styles['people-role']}> {role} </span>
              <span
                className={styles['people-delete']}
                onClick={() => {
                  const team = this.state.team.reduce(
                    (acc: Array<People>, people, index) => {
                      return indexToFound !== index ? [...acc, people] : acc;
                    },
                    [],
                  );
                  this.setState({ team });
                }}
              >
                X
              </span>
            </div>
          ))}
        </div>
        <a>
          <button
            className={styles['button']}
            onClick={() => {
              console.log(this.state);
            }}
          >
            Create
          </button>
        </a>
      </div>
    );
  }
}

export const AddPeople = (props: { onAdd: (people: People) => void }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  return (
    <div className={styles['line-container']}>
      <div className={styles['input-container']}>
        <label className={styles['label']}>Name :</label>
        <input
          className={styles['input']}
          type='text'
          value={name}
          placeholder='Name'
          onChange={({ target: { value } }) => {
            setName(value);
          }}
        />
      </div>
      <div className={styles['input-container']}>
        <label className={styles['label']}>Role :</label>
        <input
          className={styles['input']}
          type='text'
          value={role}
          placeholder='Role'
          onChange={({ target: { value } }) => {
            setRole(value);
          }}
        />
      </div>

      <button
        className={styles['button']}
        onClick={() => {
          if (name && role) {
            props.onAdd({
              name,
              role,
            });
            setName('');
            setRole('');
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Team;
