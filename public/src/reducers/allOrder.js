/**
 * Created by wangqi on 17-5-13.
 */
const allOrder = (state=[],action) => {
    switch(action.type){
        case 'ALLORDER_LOADED':
            return action.data;
    }
    return state;
};
export default allOrder;