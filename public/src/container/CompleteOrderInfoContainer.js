/**
 * Created by wangqi on 17-5-5.
 */
import { connect } from 'react-redux';
import CompleteOrderInfo from '../components/CompleteOrderInfo';

const mapStateToProps = (state)=>{
    return state;
};
// const mapDispatchToProps = (dispatch)=>{
//
// }

const CompleteOrderInfoContainer = connect(mapStateToProps)(CompleteOrderInfo);
export default CompleteOrderInfoContainer;