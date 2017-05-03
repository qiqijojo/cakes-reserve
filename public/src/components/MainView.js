
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {browserHistory} from 'react-router';
import Logo from '../container/Logo';
import Footer from './Footer';
class MainView extends Component {
  // componentWillUpdate(nextProps){
  //   if(nextProps.loginstate==='FAIL')
  //   {
  //     this.props.redirectToLoginPage();
  //     browserHistory.push('/login');   //改变browserHistory的值，即传给<Router>组件的props改变，因此，路由变化相应的store也改变，页面也就改变。
  //   }
  // }
  
  render() {
    return (
      <div>
        <Logo/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default MainView;
