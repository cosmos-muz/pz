import React from 'react';
import PropTypes from 'prop-types';

import styles from './CheeseSummary.module.scss';
import HorizontalLine from '../atoms/HorizontalLine';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  colour: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const CheeseSummary = ({ id, name, imageUrl, colour, price, onClickFunc }) => {
  const onButtonClick = () => {
    onClickFunc(id);
  };

  return (
    <div onClick={onButtonClick} className={styles.summaryContainer}>
      <div className={styles.summaryText}>{name}</div>
      <img className={styles.summaryImage} src={imageUrl} alt={`${name}`} />
      <div className={styles.summaryExtra}>
        <div className={styles.cheesePrice}>
          <span>
            <strong>Price per kilo ($):</strong>{' '}
          </span>
          <span>{price}</span>
        </div>
        <div className={styles.cheeseColour}>
          <span>
            <strong>Colour: </strong>
          </span>
          <span>{colour}</span>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
};

CheeseSummary.propTypes = propTypes;

export default CheeseSummary;
