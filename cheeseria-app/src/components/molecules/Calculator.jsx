import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import styles from './Calculator.module.scss';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const propTypes = {
  onCalculateButtonClick: PropTypes.func.isRequired,
};

const defaultProps = {};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: '', unit: 'kg' };
  }

  onChangeQty = (e) => {
    const { value } = e.target;
    let { qty } = this.state;
    qty = value;
    this.setState({ qty });
  };

  onCalculateButtonClick = () => {
    const { qty } = this.state;
    this.props.onCalculateButtonClick(qty);
  };

  render() {
    const { qty = '', unit } = this.state;

    return (
      <div className={styles.inputContainer}>
        <div className={styles.input}>
        <TextField
            id="outlined-select-cheese"
            select
            label="Cheese"
            value={unit}
            onChange={(event) => {this.setState({unit: event.target.value})}}
            className={styles.cheeseNameDropdown}
          >
            {['1', '2', '3'].map((option) => (
              <MenuItem key={option.value} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField id="outlined-start-adornment" label="Qty" className={styles.qty}/>
          <TextField
            id="outlined-select-unit"
            select
            label="Unit"
            value={unit}
            onChange={(event) => {this.setState({unit: event.target.value})}}
            className={styles.unitDropdown}
          >
            {['kg', 'g'].map((option) => (
              <MenuItem key={option.value} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button name="calculate" label="Calculate" />
      </div>
    );
  }
}

Calculator.propTypes = propTypes;
Calculator.defaultProps = defaultProps;

export default Calculator;
