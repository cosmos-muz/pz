import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  highlightSelection: PropTypes.bool,
  style: PropTypes.object,
};

const defaultProps = {
  highlightSelection: false,
  width: '250px',
  style: { width: '250px', height: '50px', fontSize: '18px' },
};

const Button = ({ name, label, onClick, highlightSelection, style }) => {
  const onButtonClick = () => {
    onClick(name);
  };

  const buttonStyle = highlightSelection
    ? [styles.button, styles.highlight].join(' ')
    : styles.button;
  return (
    <button onClick={onButtonClick} style={style} className={buttonStyle}>
      {label}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
