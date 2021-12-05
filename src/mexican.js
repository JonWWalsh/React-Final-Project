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

  const mexicanMenu = [
    {
      id: 1,
      name: "Nachos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      name: "Enchiladas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      name: "Tacos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      name: "Burritos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 5,
      name: "Taco Salad",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];

const MexicanPage = () => {

        const match = useRouteMatch();
        const findMexicanById = (id) =>
          mexicanMenu.filter((mexi) => mexi.id == id)[0];
        return (
          <div>
            <h2>Mexican</h2>
      
              {mexicanMenu.map((mexi, index) => {
                return (
                  <Alert key={index} variant="primary">
                    <Link to={`${match.url}/${mexi.id}`}>
                      {mexi.name}
                    </Link>
                  </Alert>
                );
              })}
      
            <Switch>
              <Route
                path={`${match.path}/:mexicanMenuId`}
                render={(props) => (
                  <Mexi
                    {...props}
                    data={findMexicanById(props.match.params.mexicanMenuId)}
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

function Mexi(props) {
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

export default MexicanPage