
const loginusername=(state='',action)=>{

  switch (action.type){
  case 'Loggin_state_received':
    return action.name;
  }
  
  return state;
};
export default loginusername;
