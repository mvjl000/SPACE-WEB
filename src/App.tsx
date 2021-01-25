import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

import MainPage from "./Main/MainPage";
import ResultsPage from "./Results/ResultsPage";
import About from "./About/About";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/about" component={About} />
        <Route path="/results/:phrase" component={ResultsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
