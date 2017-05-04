
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import CakeItem from './CakeItem';

class Cakes extends Component {
  render() {

    // console.log(this.props.cake)
    const {cake}=this.props;

    return (
        <div className="row">

          {
            cake.map((v, k)=> (
                <CakeItem key={k}
                          id={v._id}
                          name={v.name}
                          image={v.image}
                          price={v.price}
                          intro={v.intro}
                          infor={v.infor}
                          size={v.size}
                          style={v.style}
                />
            ))
          }
        </div>
    );
  }
}

export default Cakes;
