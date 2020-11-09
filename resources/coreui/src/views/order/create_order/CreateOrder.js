import React, { Component } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap'

import SuccessAlert from '../../alert/SuccessAlert'

const initialState = {
  name: "",
  nameError: "",
};

export default class ValiationForm extends Component {
  state = initialState;

  constructor()
  {
    super();
    this.state = {
      rider: [],
      newRiderData:{
        name:"",
      },
    }
  }

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };


  validate = () => {
    let nameError = "";

    if (!this.state.name) {
      nameError = "Customer cannot be blank";
    }

    if (nameError) {
      this.setState({ nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {

    axios.post('http://127.0.0.1:8000/api/create_order/', {
      name: this.state.name,
    })
    this.setState({
      alert_message:"success",
    })
    this.setState(initialState);
    }
  };
  

  render() {
    return (
      <div>
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader>
              General Info
            </CardHeader>
            <CardBody>
            {this.state.alert_message=="success"?<SuccessAlert/>:null}
              <Form action="" onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Customer Name</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="text-input" name="name"
                      placeholder="name"
                      value={this.state.name}
                      onChange={this.handleChange} placeholder="Text" />
                    <p className="text-warning">{this.state.nameError}</p>
                  </Col>
                </FormGroup>

                <Button type="submit" size="sm" color="primary" className="float-right"> Add Item</Button>
              </Form>
            </CardBody>

          <CardHeader>
              Item List
            </CardHeader>
          <CardBody>
              <Col col="2" className="mb-3 mb-xl-0 text-center">
                <Button color="primary" size="lg">Save Order</Button>
              </Col>
            </CardBody>
        </Card>
        </Col>
    </Row>
    </div>
    );
  }
}