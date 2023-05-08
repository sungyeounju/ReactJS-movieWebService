import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./styles.css";
function App(){
  return <Router>
    <Switch>
      <Route path="/hello">
        <h1>helllllllo~~</h1>
      </Route>
      <Route path="/movie/:id">
        <Detail></Detail>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}
export default App;