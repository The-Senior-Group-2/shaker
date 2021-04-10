import React, { useState } from 'react';
// import React from 'react';

import Checkbox from './Checkbox';

const Sidebar = () => {
  const [ isChecked, setIsChecked ] = useState(false);
  // const [ className, setClassName ] = useState('');



  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setIsChecked(checked);
    // setClassName(className);
  };

  return (
    <div>
      <label>
        <Checkbox
          checked={isChecked}
          // className={className}
          onChange={handleCheckboxChange}
        />
        <span>Label text</span>
      </label>
    </div>
  );
};





export default Sidebar;
