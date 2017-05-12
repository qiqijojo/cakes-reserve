/**
 * Created by wangqi on 17-5-5.
 */
import { connect } from 'react-redux';
import FillOrderInfo from '../components/FillOrderInfo';
import { cakeInfoLoad } from '../actions/fillOrderInfo';
import { confirmOrderAction } from '../actions/cofirmOrderAction';
import { withRouter } from 'react-router';

const mapStateToProps = (state)=>{
    return state;
};
const mapDispatchToProps = (dispatch)=>(
{
    getOrderCake: (id)=>{
        dispatch(cakeInfoLoad(id));
    },
    submitOrderInfo:(info) => {
        dispatch(confirmOrderAction(info))
    }
});

const FillOrderInfoContainer = connect(mapStateToProps,mapDispatchToProps)(withRouter(FillOrderInfo));
export default FillOrderInfoContainer;