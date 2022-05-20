import axios from 'axios';

export default class CheeseApi {
  async getCheeses() {
    const baseUrl = process.env.REACT_APP_SERVER_URL;
    const response = await axios
      .get(`${baseUrl}cheeses`);
      // .then((res) => {
      //   return res.data;
      // })
      // .catch((err) => {
      //   throw err;
      // });
      return response.data;
  }
}
