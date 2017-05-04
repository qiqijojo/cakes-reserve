
import { connect } from 'react-redux';
import { InitializeCakeDetail } from '../actions/CakeDetailActions';
import CakeDetailComponent from '../components/CakeDetailComponent';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch)=> ({
  
  cakeDetailPage: (id)=>{
    dispatch(InitializeCakeDetail(id));
  }

});

const CakeDetailContainer = connect(mapStateToProps, mapDispatchToProps)(CakeDetailComponent);

export default CakeDetailContainer;