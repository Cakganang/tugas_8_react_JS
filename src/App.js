import {Button,
  Breadcrumb,
  Carousel,
  Container,
  Row,
  Col,
  ListGroup,
  Form
} from "react-bootstrap";
import React, {Component} from "react";
import { render } from "@testing-library/react";

class App extends Component{
  render(){
    return(
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Info</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
        </Breadcrumb>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100"
            src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
            alt="Bola 1"
            />
            <Carousel.Caption>
              <h3>Maen Bola Keren 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
            src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
            alt="Bola 2"
            />
            <Carousel.Caption>
              <h3>Maen Bola Keren 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
            src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
            alt="Bola 3"
            />
            <Carousel.Caption>
              <h3>Maen Bola Keren 3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
<br />
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col></Col>
          <Col>
          <Form>
          <Form.Group>
              <Form.Label>Silahkan Login</Form.Label>
              <Form.Control type="email" placeholder="Masukkan Email Anda" />
            <br />
              <Form.Control type="password" placeholder="Masukkan Password" />
            <br />
              <Form.Check type="checkbox" label="Term & Condition" />
            </Form.Group>

            <Button variant="primary" type="submit">Login</Button> 
          </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
