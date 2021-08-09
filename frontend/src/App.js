import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from './container/SignUp';
import SignIn from './container/SignIn';
import Home from './container/Home';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar/> */}
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
