import AppHeader from '../components/generated-components/components/app-header.js';
import Dashboard from '../components/generated-components/components/dashboard.js';

export default function Home() {
  return (
    <div>
      <AppHeader framework="ryo" path="/dashboard" />
      <Dashboard />
    </div>
  );
}