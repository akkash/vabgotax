import React from "react";

import Link from "next/link";

import Layout from "../components/Layout";

import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import Select from "react-select";

import Swiper from "../components/Swiper";
import PopularCities from "../components/PopularCities";
import Discover from "../components/Discover";
import Brands from "../components/Brands";
import Instagram from "../components/Instagram";

import data from "../data/index4.json";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Vabgo Tax",
    },
  };
}

export default () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const toggle = (tab) => {
    activeTab !== tab && setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <section
        style={data.hero && { backgroundImage: `url(${data.hero})` }}
        className="d-flex align-items-center dark-overlay bg-cover"
      >
        <Container className="py-6 py-lg-7 text-white overlay-content">
          <Row>
            <Col xl="8">
              <h1 className="display-3 font-weight-bold text-shadow">
                {data.title}
              </h1>
              <p className="text-lg text-shadow mb-6">{data.subTitle}</p>
            </Col>
          </Row>
        </Container>
      </section>

      {data.discover && (
        <Discover
          className="py-6"
          title={data.discover.title}
          subTitle={data.discover.subTitle}
          blocks={data.discover.blocks}
        />
      )}
    </React.Fragment>
  );
};
