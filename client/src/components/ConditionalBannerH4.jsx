import React from 'react';


const ConditionalBannerH4 = ({ banner, item }) => {
  if (item.length) {
    return (
      <h4>{banner}</h4>
    );
  } else {
    return (
      <label></label>
    );
  }
};






export default ConditionalBannerH4;
