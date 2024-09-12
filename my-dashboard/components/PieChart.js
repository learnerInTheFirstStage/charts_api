import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export default function PieChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('/api/pie-chart').then((res) => setChartData(res.data));
  }, []);

  return <Pie data={chartData} />;
}


