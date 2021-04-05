import React, { useState } from "react";
import styled from "styled-components";
import { Navbar,  Form, FormControl, Button, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Bar from './About.jsx'


const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  li:nth-child(2) {
    margin: 0px 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;



const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;
  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }
  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

//using react bootstrap to create the navbar and using react router to create a route for each component we will use
//This is a dummy version, in which we will eventually add the main components we need to route
//Main Goal: each tab will conditionally render a certain component to display depending on the route
const MyNavbar = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <div>
    <div>
    <Nav>
        <Logo>Shaker</Logo>
        <Menu>
          <Item>
            <Link as={Link} to="/about" >
              Search
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://en.wikipedia.org/wiki/Vodka">
              Vodka
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://flordecana.com/">
              Flor De Cana
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link target="#" href="https://www.google.com/">
            Vodka
            </Link>
          </Item>
          <Item>
            <Link target="#"  href="https://en.wikipedia.org/wiki/Vodka">
              Vodka
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://flordecana.com/">
              Flor De Cana
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </div>
    <div>
      <Switch>
        <Route exact path='/about' component={Bar} />
        <Route render={function () {
          return <p>Hey!!!!</p>
        }} />
      </Switch>
    </div>
  </div>
);
};

export default MyNavbar




{/* <Navbar>
<Navbar.Brand as={Link} to="/" >Shaker</Navbar.Brand>
<Navbar.Collapse>
  <Nav className="mr-auto">
    <NavItem eventkey={1} href="/">
      <Nav.Link as={Link} to="/about" >Home</Nav.Link>
      <Nav.Link as={Link} to="/about" >Bar</Nav.Link>
    </NavItem>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success">Search</Button>
  </Form>
</Navbar.Collapse>
</Navbar> */}