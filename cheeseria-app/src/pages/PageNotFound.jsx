import React from 'react';
import logo from '../images/404_page_cover.jpeg';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound} >
      <img src={logo} width="100%" alt='page not found'/>
    </div>
  );
};

export default PageNotFound;
