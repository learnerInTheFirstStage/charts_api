import CandlestickChart from '../components/CandlestickChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

export default function Home() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ width: '80%', margin: 'auto' }}>
        <CandlestickChart />
        <LineChart />
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
}