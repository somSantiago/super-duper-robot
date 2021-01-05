import './App.css';
import Err404 from './screens/Err404'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
    <Route>
      <Err404/>
    </Route>
  </Switch>
    </Router>
    </div>
  );
}

export default App;
