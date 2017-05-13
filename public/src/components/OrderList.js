/**
 * Created by wangqi on 17-5-13.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';

class OrderList extends Component{

    render(){
        let { cakeId,styleName,num,image,time } = this.props;
            return (
                <div>
                    <div className="text-center col-xs-6 col-md-3  gallery-left two">
                        <Link to={ '/cakeDetail/'+ cakeId } className="text-center thumbnail mask b-link-stripe b-animate-go swipebox">
                            <img src={image} className="img-responsive zoom-img" />
                        </Link>
                        <div>{styleName} x {num}</div>
                        <div> {time} </div>
                    </div>
                </div>
            )
    }
}
export default OrderList;