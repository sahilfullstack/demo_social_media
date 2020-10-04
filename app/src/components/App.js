import * as React from 'react';
import { Container, Jumbotron, Card, Row, Col, Alert } from 'react-bootstrap';

export function App({ initialData }) {
  const [alert, setAlertShow] = React.useState({status: false});
  const [allUsers, setAllUsers] = React.useState(null);
  const [friends, setFriends] = React.useState(null);
  const [friendsOfFriends, setFriendsOfFriends] = React.useState(null);
  
  React.useEffect(() => {
    fetch('http://localhost:3000/api/v1/users?page=1&limit=4')
    .then(response => {
      checkForErrors(response);
      return response.json();
    })
      .then(data => {
        setAllUsers(data.data.result);
        setFriendsOfFriends(null);
        setFriends(null);

      });
  }, []);
  

  var checkForErrors = (response) => {
    if(response.status == 404 || response.status == 403) {
      setAlertShow({
        status: true,
        statusText: response.statusText
      })
    }
  }

  var fetchFriends = (id, friendsOfFriends = false) => {
    fetch('http://localhost:3000/api/v1/users/'+id+'/friends')
    .then(response => {
          checkForErrors(response);
          return response.json();
        })
      .then(data => {
        if(friendsOfFriends) {
          setFriendsOfFriends(data.data.friends)
        } else {
          setFriends(data.data.friends);
          setFriendsOfFriends(null);
        }
      });
  }

  return (
    <React.Fragment>
      {
         alert.status && <Alert variant="danger" onClose={() => setAlertShow({status: false})} dismissible>
         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
         <p>
          { alert.statusText }
         </p>
         </Alert>
         
      }    
       <Container >
        <Jumbotron>
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <h1>{initialData.appName}</h1>               
              </Col>             
            </Row>
          </Container>      
        </Jumbotron>
      </Container>
      
      {
      allUsers &&
            <Container >
              <Row>
              <Col xs={8} md={2}>
                <Card>
                  <Card.Header>All Users</Card.Header>
                    <Card.Body>
                      {
                        allUsers.map((user, index) => {
                            let child_props = {
                                name: user.firstName+" "+user.lastName,
                                avatar: user.avatar
                            };                        
                            return ( 
                              <a key={index} href="#"  onClick={()=>fetchFriends(user.id, false)} className="custom-card">
                                <div key={index} className="card card-a">
                                  <img className="card-img-top" src={child_props.avatar} alt="Card image cap"/>
                                  <div  key={index} className="card-body">
                                    <h5 key={index} className="card-title">{child_props.name}</h5>
                                  </div>
                                </div>
                              </a>
                            );
                        })
                      }     
                  </Card.Body>
                  </Card>         
              </Col>
                {
                  friends &&                
                  <Col xs={8} md={2}>
                    <Card>
                      <Card.Header>Friends</Card.Header>
                      <Card.Body>
                        {
                          friends.length > 0 ? friends.map((user, index) => {
                              let child_props = {
                                  name: user.user.firstName+ " " +user.user.lastName,
                                  avatar: user.user.avatar
                              };                        
                              return (
                                <a key={index} href="#"  onClick={()=>fetchFriends(user.id, true)} className="custom-card">
                                <div key={index} className="card card-a">
                                  <img className="card-img-top" src={child_props.avatar} alt="Card image cap"/>
                                  <div  key={index} className="card-body">
                                    <h5 key={index} className="card-title">{child_props.name}</h5>
                                  </div>
                                </div>
                              </a>
                              );
                          }) : "No Friends Yet !"
                        }
                      </Card.Body>
                    </Card>
                  </Col>
                    }
                    {
                      friendsOfFriends && 
                      <Col xs={8} md={2}>
                        <Card>
                          <Card.Header>Friends of Friends</Card.Header>
                          <Card.Body>
                            {
                              friendsOfFriends.length > 0 ? friendsOfFriends.map((user, index) => {
                                  let child_props = {
                                      name: user.user.firstName+ " " +user.user.lastName,
                                      avatar: user.user.avatar
                                  };                        
                                  return (
                                    <a key={index}>
                                    <div key={index} className="card card-a">
                                      <img className="card-img-top" src={child_props.avatar} alt="Card image cap"/>
                                      <div  key={index} className="card-body">
                                        <h5 key={index} className="card-title">{child_props.name}</h5>
                                      </div>
                                    </div>
                                  </a>
                                  );
                              }) : "No Friends of Friends Yet !!"
                            }
                          </Card.Body>
                        </Card>
                      </Col>
                  }
              </Row>
            </Container>       
      } 
    </ React.Fragment>
  );
}
