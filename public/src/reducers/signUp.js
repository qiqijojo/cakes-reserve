
const usersignup = (state = '', action)=> {
  switch (action.type) {
  case 'SIGNUP_FAIL':

    return action.data;

  case 'SIGNUP_SUCCESS':

    return action.data;
 }
  return state;
};

export default usersignup;