import React from 'react';
import Button from '../atoms/Button';
import styles from './Calculator.module.scss';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { calculateCost, calculateCostPerGram, Unit } from '../../services/cheeseService';
import HorizontalLine from '../atoms/HorizontalLine';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 0, unit: 'kg', totalCost: undefined, cheese: {} };
  }

  onChangeQty = (e) => {
    const { value } = e.target;
    const parsedInt = parseInt(value);

    if (parsedInt) {
      this.setState({ qty: parsedInt });
    } else if (value === '') {
      this.setState({ qty: 0 });
    } else {
      const { qty } = this.state;
      this.setState({ qty });
    }
  };

  onCalculateButtonClick = () => {
    const { qty, unit, cheese } = this.state;
    const price = unit === 'g' ? calculateCostPerGram(cheese.price) : cheese.price;
    this.setState({ totalCost: calculateCost(qty, price) });
  };

  render() {
    const { qty, unit, cheese, totalCost } = this.state;
    const { cheeses = [] } = this.props;

    return (
      <div>
        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <TextField
              id="outlined-select-cheese"
              select
              label="Cheese"
              value={cheese}
              onChange={(event) => {
                this.setState({ cheese: event.target.value });
              }}
              className={styles.cheeseNameDropdown}
            >
              {cheeses.map((cheese) => (
                <MenuItem key={cheese.id} value={cheese}>
                  {cheese.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-start-adornment"
              label="Qty"
              onChange={this.onChangeQty}
              value={qty}
              className={styles.qty}
              inputProps={{ maxLength: 5 }}
            />
            <TextField
              id="outlined-select-unit"
              select
              label="Unit"
              value={unit}
              onChange={(event) => {
                this.setState({ unit: event.target.value });
              }}
              className={styles.unitDropdown}
            >
              {Object.keys(Unit).map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button name="calculate" label="Calculate" onClick={this.onCalculateButtonClick} />
          <br />
        </div>
        <div className={styles.totalCost}>
          <strong>Total Cost:</strong> {totalCost}
        </div>
        <HorizontalLine />
      </div>
    );
  }
}

export default Calculator;
