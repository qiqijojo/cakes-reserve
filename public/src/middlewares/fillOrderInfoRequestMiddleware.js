
import request from 'superagent';
import { SelectedCake} from '../actions/fillOrderInfo';
import {browserHistory} from 'react-router';

const fillOrderInfoRequestMiddleware = store =>next=>action=> {// eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'CAKE_INFO_LOAD':
    request
        .get(`/api/cakedetail/${action.id}`)
        .end((err, res)=> {
          if(res.status===200){
            store.dispatch(SelectedCake(res.body));
          }
          else{
            browserHistory.push('/404');
          }
        });
    break;
  }
  next(action);
};

export default fillOrderInfoRequestMiddleware;