
import { connect } from 'react-redux';
import {cakeInfoLoad} from '../actions/fillOrderInfo';
import OrderList from '../components/OrderList';
import {withRouter} from 'react-router';
import {confirmOrderAction} from '../actions/cofirmOrderAction';
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch)=> ({

  loadorder: (id)=>{
    // console.log('container/cakeDetailContainer/loadPage:id:' + id);
    dispatch(cakeInfoLoad(id));
  },
  confirmOrderFunction: (order)=> {
    dispatch(confirmOrderAction(order));
  }
});

const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderList));

export default OrderListContainer;