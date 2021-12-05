import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import BurgerPage from './Burgers';
import ItalianPage from './italian';
import MexicanPage from './mexican';

export default function App() {
  return (
    <Router>
    <>
  <Navbar bg="light" variant="light">
    <Container fluid sm>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://d2w1ef2ao9g8r9.cloudfront.net/images/_1600x1066_crop_center-center_82_line/Menu-Engineering-Design-Thumbnail.jpeg?mtime=20200603153021&focal=54.15%25+38.08%25&tmtime=20210624222344"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      Menu Services
      <div>
        <ButtonGroup>
          <Button variant="outline-secondary">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="outline-primary">
            <Link to="/burgers">Burgers</Link>
          </Button>
          <Button variant="outline-danger">
            <Link to="/italian">Italian</Link>
          </Button>
          <Button variant="outline-success">
            <Link to="/mexican">Mexican</Link>
          </Button>
        </ButtonGroup>
        <Switch>
          <Route path="/mexican">
            <MexicanPage />
          </Route>
          <Route path="/italian">
            <ItalianPage />
          </Route>
          <Route path="/burgers">
            <BurgerPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Navbar.Brand>
    </Container>
  </Navbar>
 </>
    </Router>
  );
}

function Home() {
  return (
<div>
  <h2 className="h2home">XYZ Hotel Dining Services</h2>
    <p>Welcome to our dining services homepage!  From here you can browse our different restaurants, each with their own unique menus, as well as leave a review for any dish you have tried!</p>
    </div>
  )
}