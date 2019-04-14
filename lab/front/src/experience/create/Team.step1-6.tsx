import React from 'react';
import styles from './Informations.module.css';

interface State {}

class Team extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles['information-container']}>
        <label className={styles['label']}>Team :</label>
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
