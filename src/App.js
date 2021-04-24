import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import Details from './Component/Details/Details';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/country/:name">
            <Details></Details>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
