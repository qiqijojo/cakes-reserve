/**
 * Created by wangqi on 17-5-5.
 */
import { connect } from 'react-redux';
import FillOrderInfo from '../components/FillOrderInfo';
import { cakeInfoLoad } from '../actions/fillOrderInfo';

const mapStateToProps = (state)=>{
    return state;
};
const mapDispatchToProps = (dispatch)=>(
{
    getOrderCake: (id)=>{
        dispatch(cakeInfoLoad(id));
    }
});

const FillOrderInfoContainer = connect(mapStateToProps,mapDispatchToProps)(FillOrderInfo);
export default FillOrderInfoContainer;