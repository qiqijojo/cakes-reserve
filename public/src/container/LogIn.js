
import {connect} from 'react-redux';
import LogIn from '../components/LogIn';
import {LoginVaild} from '../actions/login_vaild';
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch)=> {
  return {
    getCookie: (text)=> {
      dispatch(LoginVaild(text));
    }
  };
};

var connect2 = connect(mapStateToProps, mapDispatchToProps);
const LogInList = connect2(LogIn);

export default LogInList;