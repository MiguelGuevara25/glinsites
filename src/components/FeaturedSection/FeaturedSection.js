import featuredSection from "@/data/featuredSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, title, text, features } = featuredSection;

const FeaturedSection = ({ className = "" }) => {
  return (
    <section className={`featured-section ${className}`} style={{paddingTop: "100px", paddingBottom: "50px"}}>
      <div className="auto-container">
        <Row className="row clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner animated fadeInLeft">
              <div className="image-box">
                <Image src={image.src} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  {title}
                </h2>
                <div className="lower-text">{text}</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeaturedSection;
