
import { connect } from 'react-redux';
import Person from '../components/PersonCenter';
import allOrderLoad from '../actions/Personal_CenterAction';

const mapStateToProps = (state) =>{
  return state;
};
const mapDispatchToProps = (dispatch) => ({
  getAllOrder:()=>{
    dispatch(allOrderLoad());
  }
});
const PersonList = connect(mapStateToProps,mapDispatchToProps)(Person);

export default PersonList;