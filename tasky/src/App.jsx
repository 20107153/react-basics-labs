import './App.css';
import Task from './components/Task';

function App() {
  return (
      <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash and dry dishes"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold and put away laundry"/>
      <Task title="Tidy" deadline="Today" description="Room is a mess clean it up"/>

    </div>
  );
}

export default App;