/**
 * Created by wangqi on 17-5-4.
 */
import React, { Component } from 'react';
class CompleteOrderInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="orderlist">
                <div className="welcome-section">
                    <div className="container">
                        <div className="about-grid ">
                            <div className="col-md-8 about-text">
                                <div className="col-md-4 about-img">
                                    <p>预定的蛋糕信息: </p>
                                    <div>{order.style}：{order.price} 元</div>

                                    <img src={ '../' + order.image} className="img-responsive zoom-img"></img>
                                </div>
                                <h3>   {login},您好, 请完善订单信息:</h3><br/>

                                <form action="#" className="form-horizontal">
                                    <div className="form-group">

                                        <div className="col-md-6 col-md-5">
                                            <label htmlFor="inputEmail3" className="control-label">真实姓名: </label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="inputEmail3"
                                                   ref="inputName"
                                            />
                                        </div>
                                        <div className="col-md-5 col-md-5 ">
                                            <label htmlFor="inputEmail3" className="control-label">联系电话: </label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="inputEmail3"
                                                   ref="inputTel"
                                            />
                                        </div>
                                        <div className="col-md-5 col-md-5">
                                            <label htmlFor="inputEmail3" className="control-label">收货地址: </label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="inputEmail3"
                                                   ref="inputAddress"
                                            />
                                        </div>


                                        <div className="col-md-5 col-md-5">
                                            <label htmlFor="inputEmail3" className="control-label">备注: </label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="inputEmail3"
                                                   ref="inputMore"
                                            />
                                        </div>

                                    </div>
                                </form>
                                <div style={{marginTop: '20px', marginLeft: '800px'}}>
                                    <button type="button"
                                            className="btn btn-info"
                                            onClick={this.confirm.bind(this)}>完成
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}