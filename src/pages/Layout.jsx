import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';
import { LogOut } from '../auth/firebase';
import { Button } from 'react-bootstrap';
import "../styles/Home.css"

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <LinkContainer to="/">
            <Nav.Link>{"Home"}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/countries">
            <Nav.Link>{"Countries"}</Nav.Link>
          </LinkContainer>
        </nav>
        <Button className="myButtonClass" onClick={() => LogOut()}>{"Logout"}</Button>
      </header>
      <Row className='mainContainer'>
        <Outlet />
      </Row>
      </div>
  );
};

export default Layout;
