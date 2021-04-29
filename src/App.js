import "./App.css";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const dotenv = require("dotenv");
dotenv.config();

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
