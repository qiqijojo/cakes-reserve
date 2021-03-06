import request from 'superagent';
import {browserHistory} from 'react-router';
const todoRequestMiddleware = store=> next=> action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'ADD_ACCOUNT':
    request.post('/users')
        .type('form')
        .send({
          username: action.text[0],
          password: action.text[1],
          rePassword: action.text[2]
        })
        .end((err, res)=> {
          if (res.body.error) {
            next({
              type: 'SIGNUP_FAIL',
              data: res.body.error
            });
          }
          else if(res.body.data){
            next({
              type: 'SIGNUP_SUCCESS',
              data: '注册成功！'
            });
               let it = confirm('注册成功！快去登录吧！');
              if(it==true){
                  browserHistory.push('/login');
              }else{
                  browserHistory.push('/signup');
              }
          }
        });
    break;
   /* case 'INIT':
      request.get('/users')
          .end((err,res) => {
            next({
              type: 'SIGNUP',
              data: ''
            });
          });
          
      break;
    case 'SIGNUP_SUCCESS':
      browserHistory.push('/');
      request.get('/users')
          .end((err,res) => {
          store.dispatch({
              type: 'INIT'
            });
          });

      break;
    case 'SIGNUP_FAIR':
      request.get('/users')
          .end((err,res) => {
            store.dispatch({
              type: 'INIT'
            });
          });
  */
  }
  next(action);
};

export default todoRequestMiddleware;
