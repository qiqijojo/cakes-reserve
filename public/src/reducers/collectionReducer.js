
const collectionCake= (state = [], action)=>{
    switch(action.type){
        case 'COLLECTION_ADD':
            return action.data;
    }
    return state;
};
export default collectionCake;