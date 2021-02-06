import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import "react-dates/initialize";

//Akkash
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  Media,
  Badge,
} from "reactstrap";
import UseWindowSize from "../hooks/UseWindowSize";
import { DateRangePicker } from "react-dates";
import Swiper from "../components/Swiper";

import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";

import data from "../data/detail-rooms.json";

import SwiperGallery from "../components/SwiperGallery";
import Gallery from "../components/Gallery";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Warehouse And Cold Storage detail",
    },
  };
}

let Map;
export default () => {
  const [mapLoaded, setMapLoaded] = React.useState(false);
  const [range, setRange] = React.useState([
    { startDate: new Date() },
    { endDate: "" },
  ]);
  const [dateFocused, setDateFocused] = React.useState(range.startDate);
  const [dragging, setDragging] = React.useState(false);
  const [tap, setTap] = React.useState(false);

  const size = UseWindowSize();

  React.useEffect(() => {
    Map = dynamic(() => import("../components/Map"), { ssr: false });
    setMapLoaded(true);

    setTap(size.width > 700 ? true : false);
    setDragging(size.width > 700 ? true : false);
  }, []);

  const groupByN = (n, data) => {
    let result = [];
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
    return result;
  };

  const groupedAmenities = data.amenities && groupByN(4, data.amenities);

  return (
    <React.Fragment>
      <section>
        <SwiperGallery data={data.swiper} />
        <Container className="py-5">
          <Row>
            <Col lg="12">
              <div className="text-block">
                <p className="text-primary">
                  <i className="fa-map-marker-alt fa mr-1" />
                  &nbsp;{data.location && data.location}
                </p>
                {data.title && <h1>{data.title}</h1>}
                {data.category && (
                  <div className="text-muted text-uppercase mb-4">
                    {data.category}
                  </div>
                )}
                {data.tags && (
                  <ul className="list-inline text-sm mb-4">
                    {data.tags.map((tag) => (
                      <li key={tag.value} className="list-inline-item mr-3">
                        <i
                          className={`fa fa-${tag.icon} mr-1 text-secondary`}
                        />{" "}
                        {tag.value}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-muted font-weight-light">
                  Our garden basement apartment is fully equipped with
                  everything you need to enjoy your stay. Very comfortable for a
                  couple but plenty of space for a small family. Close to many
                  wonderful Brooklyn attractions and quick trip to Manhattan.{" "}
                </p>
                <h6 className="mb-3">The space</h6>
                <p className="text-muted font-weight-light">
                  Welcome to Brooklyn! We are excited to share our wonderful
                  neighborhood with you. Our modern apartment has a private
                  entrance, fully equipped kitchen, and a very comfortable queen
                  size bed. We are happy to accommodate additional guests with a
                  single bed in the living room, another comfy mattress on the
                  floor and can make arrangements for small children with a
                  portable crib and highchair if requested.{" "}
                </p>
                <p className="text-muted font-weight-light">
                  Also in the apartment:
                </p>
                <ul className="text-muted font-weight-light">
                  <li>TV with Netflix and DirectTVNow</li>
                  <li>Free WiFi</li>
                  <li>Gourmet Coffee/Tea making supplies</li>
                  <li>Fresh Sheets and Towels</li>
                  <li>
                    Toaster, microwave, pots and pans and basic cooking needs
                    like salt, pepper, sugar, and olive oil.
                  </li>
                  <li>Air Conditioning to keep you cool all summer!</li>
                </ul>
                <p className="text-muted font-weight-light">
                  The apartment is surprisingly quiet for being in the heart of
                  a vibrant, bustling neighborhood.
                </p>
                <h6 className="mb-3">Interaction with guests</h6>
                <p className="text-muted font-weight-light">
                  We live in the two floors above the garden apartment so we are
                  usually available to answer questions. The garden apartment is
                  separate from our living space. We are happy to provide advice
                  on local attractions, restaurants and transportation around
                  the city. If there's anything you need please don't hesitate
                  to ask!
                </p>
              </div>
              {data.amenities && (
                <React.Fragment>
                  <div className="text-block">
                    <h4 className="mb-4">Amenities</h4>
                    <Row>
                      {groupedAmenities &&
                        groupedAmenities.map((amenityBlock) => (
                          <Col key={amenityBlock[0].value} md="6">
                            <ul className="list-unstyled text-muted">
                              {amenityBlock.map((amenity) => (
                                <li key={amenity.value} className="mb-2">
                                  <i
                                    className={`fa fa-${amenity.icon} text-secondary w-1rem mr-3 text-center`}
                                  />
                                  <span className="text-sm">
                                    {amenity.value}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </Col>
                        ))}
                    </Row>
                  </div>
                  <div className="text-block">
                    <h4 className="mb-0">Amenities alternative</h4>
                    <p className="subtitle text-sm text-primary mb-4">
                      Alternative amenities display
                    </p>
                    <ul className="list-inline">
                      {data.amenities.map((amenity) => (
                        <li
                          key={amenity.value}
                          className="list-inline-item mb-2"
                        >
                          <Badge
                            pill
                            color="light"
                            className="p-3 text-muted font-weight-normal"
                          >
                            {amenity.value}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              )}
              {data.author && (
                <div className="text-block">
                  <Media>
                    <img
                      src={`/content/img/avatar/${data.author.avatar}`}
                      alt={data.author.name}
                      className="avatar avatar-lg mr-4"
                    />
                    <Media body>
                      <p>
                        <span className="text-muted text-uppercase text-sm">
                          Hosted by
                        </span>
                        <br />
                        <strong>{data.author.name}</strong>
                      </p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.author.content,
                        }}
                      />
                      <p className="text-sm">
                        <Link href="user-profile">
                          <a>
                            See{" "}
                            {data.author.name.split(" ").slice(0, -1).join(" ")}
                            's 3 other listings{" "}
                            <i className="fa fa-long-arrow-alt-right ml-2" />
                          </a>
                        </Link>
                      </p>
                    </Media>
                  </Media>
                </div>
              )}
              <div className="text-block">
                <h3 className="mb-4">Location</h3>
                <div className="map-wrapper-300 mb-3">
                  {mapLoaded && (
                    <Map
                      className="h-100"
                      center={[40.732346, -74.0014247]}
                      circlePosition={[40.732346, -74.0014247]}
                      circleRadius={500}
                      zoom={14}
                      dragging={dragging}
                      tap={tap}
                    />
                  )}
                </div>
              </div>

              {data.swiper && (
                <div className="text-block">
                  <h3 className="mb-4">Gallery</h3>
                  <Gallery
                    rowClasses="ml-n1 mr-n1"
                    lg="4"
                    xs="6"
                    colClasses="px-1 mb-2"
                    data={data.swiper}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {data.similar && (
        <section className="py-6 bg-gray-100">
          <Container>
            <h5 className="mb-0">{data.similar.title}</h5>
            <p className="subtitle text-sm text-primary mb-4">
              {data.similar.subtitle}
            </p>
            <Swiper
              className="swiper-container-mx-negative items-slider pb-5"
              perView={1}
              spaceBetween={20}
              loop={true}
              roundLengths={true}
              md={2}
              lg={3}
              xl={4}
              data={data.similar.items}
              cards={true}
            />
          </Container>
        </section>
      )}
    </React.Fragment>
  );
};
