
const cake=(state=[],action)=>{

  switch (action.type){
  case'CAKE_LOADED':
    return action.data;
  }
  return state;
};
export default cake;