export const OrderInfo = (id)=> {
  return {
    type:'ORDER_INFO',
    id
  };
};

export const ConfirmPay = (id)=> {
  return {
    type: 'CONFIRM_PAY',
    id
  };
};
