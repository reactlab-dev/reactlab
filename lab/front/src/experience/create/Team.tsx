import React from 'react';
import { People } from '../../model';
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

        {/* 
        
        STEP 6 : REPLACE THIS COMMENT BY PEOPLE INPUTS 

        */}

        {/* 
        
        STEP 6 : REPLACE THIS COMMENT BY PEOPLE LIST 

        */}
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

export default Team;
