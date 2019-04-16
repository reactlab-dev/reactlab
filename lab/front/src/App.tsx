import styles from './App.module.css';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CreateWizard from './experience/create/Wizard';
import ExperienceList from './experience/ExperienceList';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles['main-container']}>
        <div className={styles['header']}>
          <Link to='/'>
            <span>BEES</span>
          </Link>
          <Link to='/experience/create/informations'>
            <button className={styles['button']}>Create my experience</button>
          </Link>
        </div>
        <Route path='/' exact component={ExperienceList} />
        <Route path='/experience/create' component={CreateWizard} />
      </div>
    </BrowserRouter>
  );
};
