import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarController, BarElement);

export default function BarChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('/api/bar-chart').then((res) => setChartData(res.data));
  }, []);

  return <Bar data={chartData} />;
}



