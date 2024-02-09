import React from "react";
import { Container, Table, Col, Row, Button } from "react-bootstrap";
import "./GiveList.css";

export default function GiveList() {
  return (
    <>
      <Container className="table-list">
        <Row>
          <Col xs={12} md={12}></Col>
          <b>Give List</b>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th style={{ width: "220px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <Button
                    style={{
                      "border-radius": "15px",
                      height: "28px",
                      paddingLeft: "15px",
                      paddingTop: "1px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                    size="sm"
                    variant="primary"
                  >
                    Call{" "}
                    <img
                      src="./assets/telephone.png"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </Button>
                  <Button
                    style={{
                      "border-radius": "15px",
                      height: "28px",
                      paddingLeft: "15px",
                      paddingTop: "1px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                    size="sm"
                    variant="primary"
                  >
                    Message{" "}
                    <img
                      src="./assets/chat.png"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
