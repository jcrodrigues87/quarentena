import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { About } from './components/About';
import './App.css';


function App() {
  return (
    <Router>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTATO</Link>
      <h1>Bem Vindo!</h1>
      <hr />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <h2>CONTACT Page</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
