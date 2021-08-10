import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from './container/SignUp';
import SignIn from './container/SignIn';
import Home from './container/Home';
import ProductDetail from './container/ProductDetail';
import Cart from './container/Cart';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar/> */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
