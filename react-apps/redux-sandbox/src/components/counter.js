import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, dec, inc, rnd }) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={dec} style={{ marginRight: '5px' }} className="btn btn-primary btn-lg">DEC</button>
            <button onClick={inc} style={{ marginRight: '5px' }} className="btn btn-primary btn-lg">INC</button>
            <button onClick={rnd} style={{ marginRight: '5px' }} className="btn btn-primary btn-lg">RND</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

// Extendet verion
// const mapDispatchToProps = (dispatch) => {
//     const { dec, inc, rnd } = bindActionCreators(actions, dispatch);

//     return {
//         dec,
//         inc,
//         rnd
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Simple vesion
export default connect(mapStateToProps, actions)(Counter);