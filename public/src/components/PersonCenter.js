import React, {Component} from 'react';
import {Link} from 'react-router';

class Personal extends Component {
   constructor(props){
       super(props);
   }

    render() {
        let user = this.props.loginusername;
        return (
            <div >
                <div className="container">
                    <div className="col-md-2 text-center">
                        <img src="/image/user.jpg" style={{width:'170px',height:'170px'}}/>

                        <p style={{marginTop:'10px',fontSize:'20px'}}><Link to='/cakelist'>去逛逛</Link></p>
                    </div >
                    <div className="col-md-2">
                        用户名:
                        <div className="alert alert-info" role="alert">{user}
                        </div>
                        {/*电话号码:*/}
                        {/*<div className="alert alert-info" role="alert">{userMessage.tel}*/}
                        {/*</div>*/}
                    </div>
                </div>
                <hr />
                <h2 >我的足迹：</h2>



            </div>
        )    }
}

export default Personal;
