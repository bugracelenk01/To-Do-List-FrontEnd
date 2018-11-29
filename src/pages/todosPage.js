import React, { Component } from 'react';
import { Input, Table, Badge, Button, ButtonGroup, Row, Col } from 'reactstrap';
class TodosPage extends Component {

  render() {
    return (
      <div>
        <Input />
        <Row>
          <Col xs="12" lg="4">
            <h6 className="todos-priorty">High Priorty</h6>
            <Table responsive borderless>
              <thead>
                <tr>
                  <th>To-Do</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="todos-high-prio">
                <tr>
                  <td>Hello World</td>
                  <td><Badge color="success" pill>Success</Badge></td>
                  <td>
                    <ButtonGroup>
                      <Button color="danger" size="sm">Delete</Button>
                      <Button color="danger" size="sm">Update</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs="12" lg="4">
            <h6 className="todos-priorty">Medium Priorty</h6>
            <Table responsive borderless> 
              <thead>
                <tr>
                  <th>To-Do</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="todos-medium-prio">
                <tr>
                  <td>Hello World</td>
                  <td><Badge color="success" pill>Success</Badge></td>
                  <td>
                    <ButtonGroup>
                      <Button color="info" size="sm">Delete</Button>
                      <Button color="info" size="sm">Update</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs="12" lg="4">
            <h6 className="todos-priorty">Low Priorty</h6>
            <Table responsive borderless>
              <thead>
                <tr>
                  <th>To-Do</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="todos-low-prio">
                <tr className="todos-todo">
                  <td>Hello World</td>
                  <td><Badge color="success" pill>Success</Badge></td>
                  <td>
                    <ButtonGroup>
                      <Button color="success" size="sm">Delete</Button>
                      <Button color="success" size="sm">Update</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodosPage;