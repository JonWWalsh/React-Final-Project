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

  const italianMenu = [
    {
      id: 1,
      name: "Tomato Basil Soup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      name: "Ceasar Salad",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      name: "Lasagna",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      name: "Chicken Parmesan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 5,
      name: "Tiramisu",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 6,
      name: "Gelato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."      
    },
  ];

const ItalianPage = () => {

        const match = useRouteMatch();
        const findItalianById = (id) =>
          italianMenu.filter((italian) => italian.id == id)[0];
        return (
          <div>
            <h2>Burgers</h2>
      
              {italianMenu.map((italian, index) => {
                return (
                  <Alert key={index} variant="primary">
                    <Link to={`${match.url}/${italian.id}`}>
                      {italian.name}
                    </Link>
                  </Alert>
                );
              })}
      
            <Switch>
              <Route
                path={`${match.path}/:italianMenuId`}
                render={(props) => (
                  <Italian
                    {...props}
                    data={findItalianById(props.match.params.italianMenuId)}
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

function Italian(props) {
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

export default ItalianPage