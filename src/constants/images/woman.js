
import React from 'react';
import image from '../../assets/woman.png';

const WomanImage = (props) => {

  return (
    <img width={props?.size || ""} height= {props?.size || ""}  src={image} alt ='womanimage'/>
  );
}

export default WomanImage;