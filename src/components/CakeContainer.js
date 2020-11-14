import React from "react";
import { buyCake } from "../redux/index";
import {connect } from 'react-redux'


function CakeContainer(props) {
  console.log(props)
  return (
    <div>
      <h3>No of Cakes-{props.numOfCakes}</h3>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}


const mapStatetoProps = (state) => {
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake:() => dispatch(buyCake())
  };
};

export default connect(mapStatetoProps,mapDispatchToProps)(CakeContainer);
