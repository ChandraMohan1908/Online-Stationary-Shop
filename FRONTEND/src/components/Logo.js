import React from 'react';
import shopLogo from './shop.png'; // Make sure the path to your image is correct

const Logo = ({ w, h }) => {
  return (
    <img src={shopLogo} alt="Shop Logo" style={{ width: w, height: h }} />
  );
}

export default Logo;
