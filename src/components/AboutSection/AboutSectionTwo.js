import { aboutSectionTwo, aboutSectionTwoSpanish } from "@/data/aboutSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import CounterBlock from "./CounterBlock";
import { useRouter } from "next/router";

const AboutSectionTwo = () => {
  const { pathname } = useRouter();
  // const { title, text, counters, image, since } = aboutSectionTwo;
  let title, text, counters, image, since;

  switch (pathname) {
    case "/es/index-3":
      ({ title, text, counters, image, since } = aboutSectionTwoSpanish);
      break;

    default:
      ({ title, text, counters, image, since } = aboutSectionTwo);
      break;
  }

  return (
    <section className="about-section-two">
      <div className="auto-container">
        <Row className="clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  <TextSplit text={title} />
                  <span className="dot">.</span>
                </h2>
                <div className="lower-text">{text}</div>
              </div>
              <div className="counter">
                <Row className="clearfix">
                  {counters.map((counter) => (
                    <CounterBlock key={counter.id} counter={counter} />
                  ))}
                </Row>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="image-box animated fadeInRight">
                <div className="image">
                  <Image src={image.src} alt="" />
                </div>
                <div className="since">
                  <span className="txt">
                    {pathname === "/es/index-3" ? "Desde" : "Since"} <br />
                    {since}
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
