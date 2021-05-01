import "./App.css";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calculate from "./components/Calculate";
import Fail from "./components/Fail";
import Nouser from "./components/Nouser";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main/:name" component={Main} />
          <Route exact path="/main/calc/:name" component={Calculate} />
          <Route exact path="/fail" component={Fail} />
          <Route exact path="/nouser" component={Nouser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
