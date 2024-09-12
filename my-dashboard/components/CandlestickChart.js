import { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CandlestickController, CandlestickElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, CandlestickController, CandlestickElement);

export default function CandlestickChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('/api/candlestick').then((res) => setChartData(res.data));
  }, []);

  return <Chart type="candlestick" data={chartData} />;
}

