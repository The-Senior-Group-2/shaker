import React, { Component } from 'react';
import styled from 'styled-components';

import FormsContainer from './FormsContainer.jsx';
import Search from './Search.jsx';

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
        <div className='recipe-search'>
          <Search />
        </div>
      </AppStyles>
    );
  }
}

export default App;
