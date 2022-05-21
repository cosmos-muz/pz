import axios from 'axios';

export default class CheeseApi {
   baseUrl = `${process.env.REACT_APP_SERVER_URL}/v1/cheeses`;
  async getCheeses() {
    
    const response = await axios
      .get(`${this.baseUrl}/`);
      return response.data;
  }
}
