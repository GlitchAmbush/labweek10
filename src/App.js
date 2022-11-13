// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React from "react";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        email: props.email,
        name: props.name,
        address: props.address,
        address2: props.address2,
        city: props.city,
        province: props.province,
        postal: props.postal,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
}

function App() {
  return (
    <div className="App">
      <head>
        <script
          src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>

        <script>var Alert = ReactBootstrap.Alert;</script>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <h1>Data Entry Form</h1>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label for="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter Email"
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label for="name">Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="Full Name"
              ></Form.Control>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="1234 Main St"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apartment, studio, or floor"
            ></Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Province</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option disabled>Choose...</option>
                <option>Alberta</option>
                <option>British Columbia</option>
                <option>Manitoba</option>
                <option>New Brunswick</option>
                <option>Newfoundland and Labrador</option>
                <option>Nova Scotia</option>
                <option>Ontario</option>
                <option>Prince Edward Island</option>
                <option>Quebec</option>
                <option>Saskatchewan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Agree Terms & Conditions?"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
      </body>
    </div>
  );
}

export default App;
