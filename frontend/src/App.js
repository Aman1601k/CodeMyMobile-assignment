import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from './container/SignUp';
import SignIn from './container/SignIn';
import Home from './container/Home';
import ProductDetail from './container/ProductDetail';
import Cart from './container/Cart';
import PrivateRoute from './components/HOC/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute path="/product/:id" component={ProductDetail} />
            <PrivateRoute exact path="/cart" component={Cart} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
