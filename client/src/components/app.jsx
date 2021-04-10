import React, { Component } from 'react';
import styled from 'styled-components';

import FormsContainer from './FormsContainer';
import Search from './Search';
// import Play from './Play';
import Bar from './Bar';
import Random from './Random';

const AppStyles = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  display: block;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <AppStyles>
        <div className='forms-container'>
          {/* <h1>Shaker</h1> */}
          <FormsContainer />
        </div>
        <br/>
        <div className='recipe-search'>
          <Search />
          {/* <Play /> */}
        </div>
        <br/>
        <div className='recipe-result'>
          <Bar />
        </div>
        <div>
          <Random />
        </div>
      </AppStyles>
    );
  }
}

export default App;
