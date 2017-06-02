import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
class LogIn extends Component {
    doAction() {
        let obj = {};
        let inputn = this.refs.inputName.value.trim();
        let inputp = this.refs.inputPwd.value.trim();

        obj.username = inputn;
        obj.password = inputp;
        this.props.getCookie(obj);
        this.refs.inputName.value = '';
        this.refs.inputPwd.value = '';
    }

    handleKeyPress(e) {
        if (13 !== e.charCode) {
            return;
        }
        this.doAction();
    }
    checkUsername(){
        let email = this.refs.inputName.value.trim();
        let patt = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
        if (!patt.test(email))
            this.refs.msg1.innerHTML = 'wrong format';
        else
            this.refs.msg1.innerHTML = '';
    }
    checkPassword(){
        let password = this.refs.inputPwd.value.trim();
        let patt = /^.{6,13}$/;
        if (!patt.test(password))
            this.refs.msg2.innerHTML = '6 - 13位字符';
        else
            this.refs.msg2.innerHTML = '';
    }
    render() {
        console.log(this.props)
        // const user = this.props.user;
        return (
            <div>
                <div className="container">
                    <div className="col-md-10">
                        <div className="col-md-10 ">
                            <form action="#" className="form-horizontal col-md-12">
                                <div className="form-group">
                                    <label htmlFor="inputEmail3"
                                           className="col-md-3 col-md-6 control-label">Username:</label>
                                    <div className="col-md-5 col-md-6">
                                        <input type="text"
                                               className="form-control"
                                               id="inputEmail3"
                                               placeholder="Please input username"
                                               ref="inputName"
                                               onKeyPress={this.handleKeyPress.bind(this)}
                                               onBlur={this.checkUsername.bind(this)}
                                        />
                                    </div>
                                    <span className="text-danger col-md-4" id="error_show" ref="msg1"></span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail3"
                                           className="col-md-3 col-md-6 control-label">Password:</label>
                                    <div className="col-md-5 col-md-6">
                                        <input type="Password"
                                               className="form-control"
                                               id="inputEmail3"
                                               placeholder="Please input password"
                                               ref="inputPwd"
                                               onKeyPress={this.handleKeyPress.bind(this)}
                                               onBlur={this.checkPassword.bind(this)}

                                        />
                                    </div>
                                    <span className="text-danger col-md-4" id="error_show" ref="msg2"></span>
                                </div>
                                <div className="col-lg-offset-6 col-sm-5">
                                    <button onClick={this.doAction.bind(this)} type="button"
                                            className="btn btn-default"> Login Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LogIn;