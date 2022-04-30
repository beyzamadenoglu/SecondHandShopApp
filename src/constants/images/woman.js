
import React from 'react';
import image from '../../assets/woman.png';

const WomanPage = (props) => {

  return (
    <img width={props?.size || ""} height= {props?.size || ""}  src={image} alt ='womanimage'/>
  );
}

export default WomanPage;