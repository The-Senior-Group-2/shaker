import React from 'react';
import NavBar from './navbar.jsx'
import styled from "styled-components";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    };
  }

  render() {
    const Title = styled.h1`
    font-size: 25px;
    text-align: center;
    margin-top: 50px;
  `;
    return (
      <div className="app">
        <NavBar />
        <Title>Shaker</Title>
      </div>

    );
  }

}

export default App;
