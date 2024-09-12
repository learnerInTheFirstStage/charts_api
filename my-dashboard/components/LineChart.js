import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineController, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, LineController, LineElement);

export default function LineChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('/api/line-chart').then((res) => setChartData(res.data));
  }, []);

  return <Line data={chartData} />;
}


