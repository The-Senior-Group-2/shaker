import React, { } from 'react';
import styled from 'styled-components';
import { Route, Switch, Link} from 'react-router-dom';
import Search from './Search.jsx';
import MyBar from './Bar.jsx';
import Forms from './Forms.jsx';
import Home from './Home.jsx';
import Random from './Random.jsx';

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;

const LinkCss = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  li:nth-child(odd) {
    margin: 0px 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;



// const NavIcon = styled.button`
//   background: none;
//   cursor: pointer;
//   border: none;
//   outline: none;
//   @media (min-width: 769px) {
//     display: none;
//   }
// `;






//using react bootstrap to create the navbar and using react router to create a route for each component we will use
//Main Goal: each tab will conditionally render a certain component to display depending on the route
const MyNavbar = () => {

  return (
    <div>
      <div>
        <Nav >
          <Logo as={Link} to="/" style={{fontsize: '40px'}}><img src="https://i.pinimg.com/originals/36/91/1c/36911c8d124c07a3546e04dd7f1308ce.gif" width="80" height="80" ></img>SHAKER</Logo>
          <Menu >
            <Item>
              <LinkCss as={Link} to="/">
              🥃 Home
              </LinkCss>
            </Item>
            <Item>
              <LinkCss as={Link} to="/search" >
              🔎 Search
              </LinkCss>
            </Item>
            <Item>
              <LinkCss as={Link} to="/bar">
              🍻 My Bar
              </LinkCss>
            </Item>
            <Item>
              <LinkCss as={Link} to="/learn">
              ✨Learn
              </LinkCss>
            </Item>
            <Item>
              <LinkCss as={Link} to="/random">
              🥂 MixItUp
              </LinkCss>
            </Item>
          </Menu>
        </Nav>
      </div>
      <div >
        <Switch>
          <Route exact path='/search' component={Search} />
          <Route exact path='/bar' component={MyBar} />
          <Route exact path='/learn' component={Forms} />
          <Route exact path='/random' component={Random} />
          <Route exact path='/' component={Home} />
          {/* <Route render={function () {
            return (
              <div style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1612325508365-22caba7bb69e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")',
                height: '1000px',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
                <Route exact path='/' component={Search} />
              </div>
            );
          }} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default MyNavbar;




{ /* <Navbar>
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
</Navbar> */ }
