import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ToggleStyle = styled.div`
  h1{
    color: #85ef85;
  };
  .toggle{
    position: relative;
    display: inline-block;
    width: 40px;
    height: 17px;
    background-color: #ef7b7b;
    border-radius: 30px;
    border: 2px solid ghostwhite;
    ::after{
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: ghostwhite;
      top: 1px;
      left: 1px;
      transition: all 0.35s;
    };
  };
  p{
    font-weight: bold;
  };
  .checkbox:checked + .toggle::after{
    left: 24px;
  };
  .checkbox:checked + .toggle{
    background-color: #85ef85;
  }
  .checkbox{
    display: none;
  }
  label{
    top: 2px;
    left: 4px;
  }
`;


const ToggleSwitch = (props) => {

  const { label, handler } = props;

  return (
    <div>
      <label style={{alignContent: 'center'}}>{label}</label>
      <ToggleStyle>
        <input
          type='checkbox'
          id='switch'
          className='checkbox'
          onClick={handler}
        />
        <label
          htmlFor='switch'
          className='toggle'
        ></label>
      </ToggleStyle>
    </div>
  );
};






export default ToggleSwitch;



ToggleSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};
