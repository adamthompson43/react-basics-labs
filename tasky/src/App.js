import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title='Wash the cauliflower' deadline='18:00'
        description='Break into pieces and rinse.'/>
      <Task title='Cook the cauliflower' deadline='18:30'
        description='I think roasting it would be yummy!'/>
      <Task title='Eat the cauliflower' deadline='19:00'
        description='Eat it with your loved ones.'/>
    </div>
  );
}

export default App;
