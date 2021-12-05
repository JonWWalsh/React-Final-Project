import React from 'react';
import Review from './components/review components/review';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import './Burgers.css';

const burgersMenu = [
    {
      id: 1,
      name: "Onion Rings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      name: "Cheese Burger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      name: "Bison Burger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      name:  "Bacon Cheeseburger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 5,
      name: "Hot & Spicy Burger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];

const BurgerPage = () => {
        const match = useRouteMatch();
        const findBurgerById = (id) =>
          burgersMenu.filter((burger) => burger.id == id)[0];
        return (
          <div className="burgerbody">
            <h2>Burgers</h2>
      
              {burgersMenu.map((burger, index) => {
                return (
                  <Alert key={index} variant="primary">
                    <Link to={`${match.url}/${burger.id}`}>
                      {burger.name}
                    </Link>
                  </Alert>
                );
              })}
      
            <Switch>
              <Route
                path={`${match.path}/:burgersMenuId`}
                render={(props) => (
                  <Burger
                    {...props}
                    data={findBurgerById(props.match.params.burgersMenuId)}
                    />
                )}
              />
              <Route path={match.path}>
                <h3>Please Select an Item.</h3>
              </Route>
            </Switch>
          </div>
        );
}

function Burger(props) {
    const {data} = props;
    return data == undefined ? <h1>404 Not Found</h1> :(
      <Card>
        <Card.Header>{data.name}</Card.Header>
        <Card.Body>
          <Card.Subtitle>{data.name}</Card.Subtitle>
          <Card.Text>{data.description}</Card.Text>
          <Review />
        </Card.Body>
      </Card>
    );
  }

export default BurgerPage