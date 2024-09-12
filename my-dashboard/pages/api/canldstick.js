import axios from "axios";

export default async function handler(req, res) {
    try {
        const apiResponse = await axios.get('http://localhost:8000/api/candlestick-data/');
        res.status(200).json(apiResponse.data);
      } catch (error) {
        res.status(error.response?.status || 500).json({ error: 'Failed to fetch data' });
      }
}