import React, {Component} from 'react';
import {Link} from 'react-router';
import OrderList from './OrderList';

class Personal extends Component {
   constructor(props){
       super(props);
   }
componentDidMount(){
    this.props.getAllOrder();
}
    render() {
        console.log(this.props.allOrder)
        const { allOrder } = this.props;
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
                <div className="row" style={{marginLeft:'40px'}}>
                    {
                        allOrder.map((v,k)=>(
                            <OrderList key={k}
                                       id={v._id}
                                       cakeName={v.cakeName}
                                       image={v.image}
                                       num={v.num}
                            />
                            )
                        )
                    }
                </div>


            </div>
        )    }
}

export default Personal;
