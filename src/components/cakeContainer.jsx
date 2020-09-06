import React from 'react';
import {connect} from  'react-redux'
import {buyCake} from "../redux/cakes/cakeActions";


function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfCake: state.numOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);