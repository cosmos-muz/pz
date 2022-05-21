import React, { Component } from 'react';
import styles from './CheesePage.module.scss';
import CheeseSummary from '../components/molecules/CheeseSummary';
import CheeseApi from '../api/CheeseApi';
import Calculator from '../components/molecules/Calculator';

class CheesePage extends Component {
  constructor(props) {
    super(props);
    this.state = { cheeses: [] };
  }

  async componentDidMount() {
    try {
      const cheeseApi = new CheeseApi();
      const cheeses = await cheeseApi.getCheeses();
      this.setState({ cheeses: cheeses.data });
    } catch (error) {
      //throw error & redirect to erro page
    }
  }
  renderCheeseList() {
    const { cheeses } = this.state;
    return cheeses.map((cheese) => {
      const { id, name, imageUrl, price, colour } = cheese;
      return (
        <CheeseSummary 
        id={id} 
        name={name} 
        key={id} 
        imageUrl={imageUrl} 
        onClickFunc={() => {}} 
        colour={colour}
        price={Number(price)}
        />
      );
    });
  }

  render() {
    return (
      <div className={styles.mainContainer} key="cheese-page">
        <div className={styles.heading}>Cheeseria</div>
        <div className={styles.calculator}><Calculator cheeses={this.state.cheeses} /></div>
        <div className={styles.summaryContainer}>{this.renderCheeseList()}</div>
      </div>
    );
  }
}

export default CheesePage;
