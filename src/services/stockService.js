import axios from 'axios';

const order = [
  'Mar 21',
  'Jun 21',
  'Sep 21',
  'Dec 21',
  'Mar 22',
  'Jun 22',
  'Sep 22',
  'Dec 22',
  'Mar 23',
  '""',
  '3 Aug 23',
  '2 Nov 23',
  '1 Feb 24',
  '2 Mai 24'
];

class StockService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://sheetdb.io/api/v1/8qaot0bu6vekv'
    });
  }

  async fetchData(sheetName) {
    try {
      const response = await this.apiClient.get(`?sheet=${sheetName}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  async getRevenue(sheetName) {
    const data = await this.fetchData(sheetName)
    return order.map(key => data[3][key]);
  }
}

export const stockService = new StockService();
