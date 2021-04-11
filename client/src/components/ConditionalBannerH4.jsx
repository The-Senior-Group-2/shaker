import React from 'react';

// conditionally renders an h4 banner if the correct props are passed to it
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
