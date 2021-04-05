import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import About from './About'


//using react bootstrap to create the navbar and using react router to create a route for each component we will use
//This is a dummy version, in which we will eventually add the main components we need to route
//Main Goal: each tab will conditionally render a certain component to display depending on the route
const MyNavbar = () => {

  return (
    <div>
    <div>
      <Navbar>
        <Navbar.Brand as={Link} to="/" >Shaker</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <NavItem eventkey={1} href="/">
              <Nav.Link as={Link} to="/about" >Home</Nav.Link>
            </NavItem>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
    <div>
      <Switch>
        <Route exact path='/about' component={About} />
        <Route render={function () {
          return <p>Not found</p>
        }} />
      </Switch>
    </div>
  </div>
);
};

export default MyNavbar