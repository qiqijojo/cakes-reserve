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
        const { allOrder } = this.props;
        let user = this.props.loginusername;
        return (
            <div >
                <div className="container">
                    <div className="col-md-2 text-center">
                        <img src="/image/self.jpg" style={{width:'180px',height:'180px'}}/>

                        <p style={{marginTop:'10px',fontSize:'20px'}}><Link to='/cakelist'>走～去逛逛</Link></p>
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
                <h2 >订单足迹：</h2>
                <div className="row" style={{marginLeft:'40px'}}>
                    {
                        allOrder.map((v,k)=>(
                            <OrderList key={k}
                                       id={v._id}
                                       cakeId={v.cakeId}
                                       styleName={v.styleName}
                                       image={v.image}
                                       num={v.num}
                                       time={v.time}
                            />
                            )
                        )
                    }
                </div>


            </div>
        )    }
}

export default Personal;
