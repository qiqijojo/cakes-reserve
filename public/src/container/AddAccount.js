import { connect } from 'react-redux';
import SignUp from '../components/Signup';
import { addAccount } from '../actions/index';

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({
  registerAccount: (arr)=> {
    dispatch(addAccount(arr));
  }
});

var connect2 = connect(mapStateToProps, mapDispatchToProps);
const AddAccount = connect2(SignUp);

export default AddAccount;
