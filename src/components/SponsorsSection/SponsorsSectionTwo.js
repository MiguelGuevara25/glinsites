import {
  sponsorsSectionTwo,
  sponsorsSectionTwoSpanish,
} from "@/data/sponsorsSection";
import { useRouter } from "next/router";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const SponsorsSectionTwo = () => {
  let title, images;

  const { pathname } = useRouter();

  switch (pathname.split("/")[1]) {
    case "es":
      ({ title, images } = sponsorsSectionTwoSpanish);
      break;

    default:
      ({ title, images } = sponsorsSectionTwo);
      break;
  }

  return (
    <section className="sponsors-section-two">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={5} lg={12} md={12} className="title-col">
            <div className="sec-title animated fadeInLeft">
              <h2>
                {title}
                <span className="dot">.</span>
              </h2>
            </div>
          </Col>

          <Col xl={7} lg={12} md={12} className="logo-col">
            <Row className="clearfix">
              {images.map((image, i) => (
                <Col
                  key={i}
                  xl={4}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                  className="logo-block"
                >
                  <div className="image-box">
                    <a href="#">
                      <Image src={image.src} alt="" />
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SponsorsSectionTwo;
