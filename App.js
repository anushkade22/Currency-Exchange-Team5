
import "./App.css";
import NavBar from "./components/Pages/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Login } from "./components/Pages/Login";



// Bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
