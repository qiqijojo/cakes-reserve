
const loginstate = (state = 'Checking', action)=> {
  switch (action.type) {
    case 'Loggin_state_received':
      console.log('reducer-state');
      return action.states;

    case 'REDIRECT_TO_LOGIN':
      return 'Checking';
  }
  
  return state;
};
export default loginstate;