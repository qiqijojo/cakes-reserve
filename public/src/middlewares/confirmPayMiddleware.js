
import request from 'superagent';
import {browserHistory} from 'react-router';
import { SelectedCake} from '../actions/fillOrderInfo';
const confirmPayMiddleware = store => next => action => {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'CONFIRM_PAY':
    request
          .put(`/api/order/${action.id}`)
          .type('form')
          .send({isPay: true})
          .end((err, res) => {
            if (res.status === 205) {
                console.log(res.body)
              // alert('预定成功,正在配送，请稍后!');
              browserHistory.push('/personCenter');
            }
          });
    break;
  }
  next(action);
};

export default confirmPayMiddleware;