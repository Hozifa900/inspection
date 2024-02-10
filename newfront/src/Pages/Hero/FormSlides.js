import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Hero.css";

export default function FormSlides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        controls={false}
        onSelect={handleSelect}
        indicators={false}
        className="form-list"
      >
        <Carousel.Item>
          <Container className="give-card">
            <Row>
              <Col xs={12} md={12}>
                <p className="give-title">I can give you a ...</p>
              </Col>
              <Col xs={12} md={12}>
                <textarea className="give-input"></textarea>
              </Col>
              <Col xs={12} md={6}>
                <input
                  className="give-input"
                  type="phone"
                  placeholder="Phone Number"
                />
              </Col>
              <Col xs={12} md={6}>
                <input className="give-input" type="name" placeholder="Name" />
              </Col>
              <Col xs={12} md={12}>
                <Button
                  style={{ "border-radius": "5px", margin: "5px" }}
                  size="sm"
                  variant="primary"
                >
                  Add to Give List
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="give-card">
            <Row>
              <Col xs={12} md={12}>
                <p className="give-title">I can give you a ...</p>
              </Col>
              <Col xs={12} md={12}>
                <textarea className="give-input"></textarea>
              </Col>
              <Col xs={12} md={6}>
                <input
                  className="give-input"
                  type="phone"
                  placeholder="Phone Number"
                />
              </Col>
              <Col xs={12} md={6}>
                <input className="give-input" type="name" placeholder="Name" />
              </Col>
              <Col xs={12} md={12}>
                <Button
                  style={{ "border-radius": "5px", margin: "5px" }}
                  size="sm"
                  variant="primary"
                >
                  Add to Give List
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Row>
          <Col xs={6} md={6}>
            <Button
              style={{
                "border-radius": "5px",
                margin: "5px",
                width: "100%",
              }}
              size="sm"
              variant="primary"
              onClick={() => handleSelect(0)}
            >
              Add to Give List
            </Button>
          </Col>
          <Col xs={6} md={6}>
            <Button
              style={{
                "border-radius": "5px",
                margin: "5px",
                width: "100%",
              }}
              size="sm"
              variant="primary"
              onClick={() => handleSelect(1)}
            >
              Add to Wish List
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
