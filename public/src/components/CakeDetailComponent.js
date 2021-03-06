
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
class CakeDetailComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.cakeDetailPage(this.props.params.id);
    }


    render() {

        const {name, image, style, intro, size, price, infore, inforc}  = this.props.cakeDetail;
        const id = this.props.cakeDetail._id;

        return (
            <div>
                <div className="cakecomcui">
                    <div className="welcome-section">
                        <div className="container">
                            <div className="about-grid ">
                                <div className="col-md-8 about-text">
                                    <div className="col-md-4 about-img">
                                        <img src={ '../' + image} className="img-responsive zoom-img img-rounded"
                                             title={inforc}/>
                                    </div>
                                    <div style={{marginTop: '20px', marginLeft: '480px'}}>
                                        <h3 style={{color: '#b0916a'}}>cakeDetail -- {style}</h3>
                                        <p>蛋糕名称：{name}</p>
                                        <p>蛋糕风味：{style}</p>
                                        <p>蛋糕简介：{intro}</p>
                                        <p>蛋糕价格：{price} 元</p>
                                        <p>蛋糕尺寸：{size}</p>
                                        <p>蛋糕心语：{infore}</p>
                                    </div>
                                    <div style={{marginTop: '20px', marginLeft: '500px'}}>
                                        <Link to={'/fillorderInfo/' + id}>
                                            <button className="btn btn-info">立即预定</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CakeDetailComponent;