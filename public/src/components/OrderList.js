/**
 * Created by wangqi on 17-5-13.
 */
import React, { Component } from 'react';
class OrderList extends Component{

    render(){
        let { cakeName,num,image } = this.props;
        return (
            <div>
                <div className="text-center col-xs-6 col-md-3  gallery-left two">
                    {/*<Link to={'/cakeDetail/' + id} className="text-center thumbnail mask b-link-stripe b-animate-go swipebox">*/}
                        {/*<img src={image} title={intro} className="img-responsive zoom-img" />*/}
                    {/*</Link>*/}
                    <div className="text-center thumbnail mask b-link-stripe b-animate-go swipebox">
                        <img src={image} className="img-responsive zoom-img" />
                    </div>
                    <div>{cakeName} x {num}</div>
                </div>
            </div>
        )
    }
}
export default OrderList;