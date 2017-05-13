import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';

class Logo extends Component {

  componentWillMount(){
    this.props.isLogin();
  }

  render() {
    let stateBtn1;
    let stateBtn2;
    let statePath;
    if(this.props.loginusername!==null)
    {
      stateBtn1 =this.props.loginusername;
      statePath='/personcenter';
      stateBtn2='退出';
    }
    else{
      stateBtn1 ='登录';
      statePath='/login';
      stateBtn2='注册';
    }
    return (
        <div className="header">
          <div className="header-top">
            <div className="container">
              <div className="top-nav">
                <span className="menu two"> </span>
                <ul>
                  <li><Link to="/">首&nbsp;&nbsp;页</Link></li>
                  <li><Link to="/cakelist">蛋糕名录</Link></li>
                  <li><Link to="/exclusive">唯依专区</Link></li>
                  <li className="/lost"><Link to="/contact">订购帮助</Link></li>
                  <li><Link to="/personcenter">个人中心</Link></li>
                </ul>
              </div>
                <ul className="nav navbar-nav" style={{marginLeft:'60px'}}>
                  <li><Link className="loginands" to={statePath}>{stateBtn1}</Link></li>
                  <li><Link className="loginands" to="/signup">{stateBtn2}</Link></li>
                </ul>
            </div>
          </div>
          <div className="head-bg">
            <div className="logo three">
              <a href=""><h1><span> JOJO </span> CAKES <span> FOR </span> U</h1></a>
            </div>
          </div>
        </div>
    );
  }
}
export default Logo;