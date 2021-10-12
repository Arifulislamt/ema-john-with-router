import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Invantory from './components/Invantory/Invantory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Invantory></Invantory>
          </Route>
          <Route path="*">
            <NotFound></NotFound> 
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
