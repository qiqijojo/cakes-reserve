import React, {Component} from 'react';
import {Link} from 'react-router';

class Personal extends Component {
   constructor(props){
       super(props);
   }

    render() {
        console.log(this.props)
        let user = this.props.loginusername;
        return (
            <div >
                <div className="container">
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'180px',height:'180px'}}/>

                        <p style={{marginTop:'10px',fontSize:'20px'}}><Link to='/cakelist'>蛋糕名录</Link></p>
                    </div >
                    <div className="col-md-2">
                        用户名:
                        <div className="alert alert-info" role="alert">{user}
                        </div>
                        寄语：
                        <div className="alert alert-info" role="alert">JoJo Cakes For U
                        </div>
                    </div>
                </div>
                <hr />
                <h2 >我的订单：</h2>
                <div className="container" style={{marginLeft:'40px'}}>
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'180px',height:'180px',marginBottom:'10px'}}/>
                        <p>名称:</p>
                        <p>数量:</p>
                        <p>总价:</p>
                        <p>时间：</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'180px',height:'180px'}}/>
                        <p>名称:</p>
                        <p>数量:</p>
                        <p>总价:</p>
                        <p>时间：</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'180px',height:'180px'}}/>
                        <p>名称:</p>
                        <p>数量:</p>
                        <p>总价:</p>
                        <p>时间：</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'180px',height:'180px'}}/>
                        <p>名称:</p>
                        <p>数量:</p>
                        <p>总价:</p>
                        <p>时间：</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'180px',height:'180px'}}/>
                        <p>名称:</p>
                        <p>数量:</p>
                        <p>总价:</p>
                        <p>时间：</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'180px',height:'180px'}}/>
                        <p>名称:</p>
                        <p>数量:</p>
                        <p>总价:</p>
                        <p>时间：</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'180px',height:'180px'}}/>
                        <p>名称:</p>
                        <p>数量:</p>
                        <p>总价:</p>
                        <p>时间：</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'180px',height:'180px'}}/>
                        <p>名称:</p>
                        <p>数量:</p>
                        <p>总价:</p>
                        <p>时间：</p>
                    </div>
                </div>


            </div>
        )    }
}

export default Personal;
