import AppHeader from '../components/generated-components/components/app-header.js';
import Todo from '../components/generated-components/components/todo-app.js';

export default function Home() {
  return (
    <div>
      <AppHeader framework="ryo" path="/todo" />
      <Todo />
    </div>
  );
}
