import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./component/Home.js";
import Contact from "./component/Contact.js";
import About from "./component/About.js";
import Navbar from "./component/Navbar"


function App() {
  return (


    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact/:id" component={Contact}/>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
