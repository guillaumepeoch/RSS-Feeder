import React from 'react';

import News from '../news/News';
import styles from './home.module.css';

const Home = (props) => {
    return (
      <div className={styles.container}>
        <News
        />
      </div>
    );
}

export default Home;
