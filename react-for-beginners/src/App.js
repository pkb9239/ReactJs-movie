import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./routes/Details";
import Home from "./routes/Home";

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/movie/:id">
        <Details />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;