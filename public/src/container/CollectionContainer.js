
import {connect} from 'react-redux';
import {collectionById} from '../actions/personalCollection';
import personalCollection from '../components/personalCollection';

const mapStateToProps = (state)=>{
    return state;
};
const mapDispatchToProps = (dispatch)=>({
    loadCollection: (id) =>{
        dispatch(collectionById(id));
    }
});

const collectionCake = connect(mapStateToProps,mapDispatchToProps)(personalCollection);
export default collectionCake;