import React from "react";
import { buyIceCream } from "../redux/index";
import {connect } from 'react-redux'


function IceCreamContainer(props) {

  return (
    <div>
      <h3>No of Icecreams-{props.numOfIceCreams}</h3>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}


const mapStatetoProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream:() => dispatch(buyIceCream())
  };
};

export default connect(mapStatetoProps,mapDispatchToProps)(IceCreamContainer);
