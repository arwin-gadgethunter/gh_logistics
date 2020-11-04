import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Dropdown,
  Row,
  DataTable
} from 'reactstrap'

const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader>
              General Info
            </CardHeader>
            <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <ormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Customer Name</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Text" />
                    <CFormText>This is a help text</CFormText>
                  </Col>
                </ormGroup>
                <FormGroup row>
                  <Col md="3">
                    <CLabel htmlFor="email-input">Date of Order</CLabel>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="date" id="date-input" name="date-input" placeholder="Enter Email" autoComplete="email" />
                    <FormText className="help-block">Please enter date of order</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Currency</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Dropdown custom name="select" id="select">
                      <option value="1">PHP</option>
                    </Dropdown>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="date-input">Date Input</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Rider Name</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="text-input" name="text-input" placeholder="Text" />
                    <FormText>This is a help text</FormText>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          <CardHeader>
              Item List
              <Button type="submit" size="sm" color="primary" className="float-right"> Add Item</Button>
            </CardHeader>
          <CardBody>
            <DataTable  
              />
              <Col col="2" className="mb-3 mb-xl-0 text-center">
                <Button color="primary" size="lg">Save Order</Button>
              </Col>
            </CardBody>
        </Card>
        </Col>
    </Row>
    </>
  )
}

export default BasicForms
