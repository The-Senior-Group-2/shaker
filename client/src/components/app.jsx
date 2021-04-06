import React, { Component } from 'react';
import styled from 'styled-components';

import FormsContainer from './FormsContainer';
import Search from './Search';
import Bar from './Bar';

const AppStyles = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
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
        </div>
        <br/>
        <div className='recipe-result'>
          <Bar />
        </div>
      </AppStyles>
    );
  }
}

export default App;
