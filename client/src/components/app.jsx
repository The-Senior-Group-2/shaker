import React, { Component } from 'react';
import FormsContainer from './FormsContainer.jsx';
import styled from 'styled-components';

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
        <div>
          {/* <h1>Shaker</h1> */}
          <FormsContainer />
        </div>
      </AppStyles>
    );
  }
}

export default App;
