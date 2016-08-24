import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import CakeDetailContainer from './container/CakeDetailContainer';
import OrderListContainer from './container/OrderListContainer';
import CakesList from './components/CakeList';
import Notfound from './components/404';
import BrandStory from './components/BrandStory';
import Orderlist from './components/OrderList';

import ConfirmPay from './container/ConfirmPayContainer';

import Login from './container/LogIn';
import Slide from './components/SlideShow';
import APP from './components/App';
import MainView from './container/ValidLogin';
import Contact from './components/Contact';
import AddTodo from './container/AddTodo';
import cakeList from './reducers';
import Exclusive from './components/Exclusive';
import Presoncenter from './components/PersonCenter';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import cakeRequestMiddleware from './middlewares/cakeRequestMiddleware';
import signUpRequestMiddleware from './middlewares/signUpRequestMiddleware';
import cakeDetailRequestMiddleware from './middlewares/cakeDetailRequestMiddleware';
import loginRequestMiddleware from './middlewares/loginRequestMiddleware';
import orderRequestMiddleware from './middlewares/orderRequestMiddleware';
import validLoginRequestMiddleware from './middlewares/validLoginRequestMiddleware';
import getOrderInfoMiddleware from './middlewares/getOrderInfoMiddleware';


const store = createStore(
    cakeList,
    applyMiddleware(cakeRequestMiddleware, loginRequestMiddleware,
        signUpRequestMiddleware, cakeDetailRequestMiddleware,
        orderRequestMiddleware,getOrderInfoMiddleware, validLoginRequestMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Router history={browserHistory}>

       
        <Route path="/" component={MainView}>
          <IndexRoute  component={APP}/>
          <Route path="/login" component={Login}/>
          <Route path="/cakelist" component={CakesList}/>
          <Route path="/brandstory" component={BrandStory}/>
          <Route path="/slideshow" component={Slide}/>
          <Route path="/presoncenter" component={Presoncenter}/>
          <Route path="/exclusive" component={Exclusive}/>
          <Route path="/presoncenter" component={Presoncenter}/>
          <Route path="/orderlist" component={Orderlist}/>
          <Route path="/confirmpay" component={ConfirmPay}/>
          <Route path="/signup" component={AddTodo}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/404" component={Notfound}/>
          <Route path="/cakedetail/:id" component={CakeDetailContainer}/>
          <Route path="/orderlist/:id" component={OrderListContainer}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
);