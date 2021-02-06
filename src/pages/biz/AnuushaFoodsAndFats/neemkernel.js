import React from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";

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
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#">Products</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <Row>
            <Col lg="16">
              <p className="h1 text-primary">Neem Kernel</p>
              <h1 className="h2 mb-5">Erode, Tamil Nadu</h1>
              <Button color="primary">Akkash1</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
