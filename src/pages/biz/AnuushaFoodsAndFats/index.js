import React from "react";

import Link from "next/link";

import { Container, Row, Col, Button } from "reactstrap";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Anuusha Foods And Fats",
    },
  };
}

export default () => {
  return (
    <React.Fragment>
      <section className="py-7 py-lg-5">
        <Container>
          <Row>
            <Col lg="16">
              <h1 className="h1 text-primary">Anuusha Foods And Fats</h1>
              <h1 className="h1 mb-5">Erode, Tamil Nadu</h1>
              <Button color="primary">Akkash1</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
