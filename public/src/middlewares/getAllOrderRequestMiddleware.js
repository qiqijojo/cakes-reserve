/**
 * Created by wangqi on 17-5-13.
 */
import request from 'superagent';

const allOrderRequest = store => next => action => {
    switch (action.type) {
        case 'ALLORDER_LOAD':
            request.get('/api/order')
                .end((err, res)=> {
                    next({
                        type: 'ALLORDER_LOADED',
                        data: res.body
                    });
                });
            break;
    }
    next(action);
};
export default allOrderRequest;