
import request from 'superagent';
import {browserHistory} from 'react-router';

const confirmOrderMiddleware
    = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case'CONFIRM_ORDER':
    request.post('/api/order')
          .type('form')
          .send({
            realName:action.info.realName,
            tel:action.info.tel,
            address:action.info.address,
            num:action.info.num,
            cakeId:action.info.cakeId,
            styleName:action.info.styleName,
            cakeName:action.info.cakeName,
            image:action.info.image,
            price:action.info.price,
          })
          .end((err, res)=> {
            next({
              type: 'CONFIRMED_ORDER',
              data: res.body._id
            });
            browserHistory.push('/confirmpay/'+res.body._id);
          });
    break;
  }
  next(action);
};

export default confirmOrderMiddleware;