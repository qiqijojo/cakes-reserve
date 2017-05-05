
export const SelectedCake = (data)=> {
  // console.log('actions/cakeDetailActions/CAKEDETAIL_LOADED:data:' + data);
  return {
    type: 'SELECTED_CAKES_LOADED',
    data
  };
};

export const cakeInfoLoad = (id)=> {
  // console.log('actions/fillOrderInfo/CAKE_INFO_LOAD:id:' + id);
  return {
    type: 'CAKE_INFO_LOAD',
    id
  };
};