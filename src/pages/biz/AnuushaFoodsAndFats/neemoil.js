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
      <section className="py-5 py-lg-7">
        <Container>
          <Row>
            <Col lg="16">
              <p className="h1 text-primary">Neem Oil</p>
              <h1 className="h2 mb-5">Erode, Tamil Nadu</h1>
              <Button color="primary">Akkash1</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
