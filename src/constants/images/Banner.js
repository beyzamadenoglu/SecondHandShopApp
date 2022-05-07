
import React from 'react';
import image from '../../assets/Banner.png';

const BannerImage = (props) => {

  return (
    <img className="banner" width={props?.size || ""} height= {props?.size || ""}  src={image} alt ='womanimage'/>
  );
}

export default BannerImage;