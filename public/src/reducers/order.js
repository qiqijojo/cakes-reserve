
const orderDetail = (state = {}, action)=> {
  switch (action.type) {
  case 'SELECTED_CAKES_LOADED':
    return action.data;
  /*case 'CONFIRM_ORDER_TRUE':
    return action.data;*/
  case 'CONFIRMED_ORDER':
    return action.data;
  }

  return state;
};

export default orderDetail;