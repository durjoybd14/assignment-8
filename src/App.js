import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Cricket from "./Components/Cricket/Cricket";
import Football from "./Components/Football/Football";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import LeagueDetails from "./Components/LeagueDetails/LeagueDetails";
import MenuBar from './Components/MenuBar/MenuBar';
import News from "./Components/News/News";
import NoMatch from "./Components/NoMatch/NoMatch";

function App() {
  return (
    <div className="container">
      <Router>
        <MenuBar />
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/leagueinfo/:idLeague">
            <LeagueDetails />
          </Route>

          <Route path="/news">
            <News />
          </Route>

          <Route path="/cricket">
            <Cricket />
          </Route>

          <Route path="/football">
            <Football />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
