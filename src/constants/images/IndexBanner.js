import React from 'react';
import image from '../../assets/Banner.png';

const IndexBanner = (props) => {

  return (
    <img width={props?.size || ""} height= {props?.size || ""}  src={image} alt ='banner'/>
  );
}

export default IndexBanner;