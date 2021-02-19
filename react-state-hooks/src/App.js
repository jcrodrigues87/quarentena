import Avatar from './avatar.png';
import './App.css';
import { Contador } from './components/Contador';

export const App = () => {
  return (
    <div className="App">
      <img src={Avatar} className="App-logo" />
      <Contador />
    </div>
  );
};

export default App;
