

const cakeDetail = (state = [], action)=> {
  switch (action.type) {
  case 'CAKEDETAIL_LOADED':
    return action.data;
  }
  return state;
};

export default cakeDetail;