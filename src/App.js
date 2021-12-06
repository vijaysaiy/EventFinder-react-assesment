import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import CreateEvent from "./Components/CreateEvent";
import Events from "./Screens/Events";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events/add/" component={CreateEvent} />
          <Route exact path="/events/view" component={Events} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
