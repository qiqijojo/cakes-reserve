
import { connect } from 'react-redux';
import Person from '../components/PersonCenter';

const mapStateToProps = (state) =>{
  return state;
};

const PersonList = connect(mapStateToProps)(Person);

export default PersonList;