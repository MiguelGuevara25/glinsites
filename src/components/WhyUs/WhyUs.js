import whyUs, { whyUsSpanish } from "@/data/whyUs";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import photoDescription from "../../../public/images/photoDescription.png";
import { useRouter } from "next/router";

const { image, title, features, videoId } = whyUs;
const { title2, features2 } = whyUsSpanish;

const WhyUs = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <>
      <section className="why-us-section">
        <div className="auto-container">
          <Row className="clearfix">
            <Col lg={6} md={12} sm={12} className="left-col">
              <div className="inner animated fadeInLeft">
                <div className="round-box">
                  <div className="image-box">
                    <Image src={photoDescription.src} alt="" />
                  </div>
                </div>
              </div>
            </Col>

            {pathname === "/es" ? (
              <Col lg={6} md={12} sm={12} className="right-col">
                <div className="inner">
                  <div className="sec-title-two">
                    <h2>{title2}</h2>
                  </div>
                  <div className="features">
                    {features2.map(({ id, title, text }) => (
                      <div key={id} className="feature">
                        <div className="inner-box">
                          <h6 style={{ paddingTop: "15px" }}>{title}</h6>
                          <div className="text">{text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            ) : (
              <Col lg={6} md={12} sm={12} className="right-col">
                <div className="inner">
                  <div className="sec-title-two">
                    <h2>{title}</h2>
                  </div>
                  <div className="features">
                    {features.map(({ id, title, text }) => (
                      <div key={id} className="feature">
                        <div className="inner-box">
                          <h6 style={{ paddingTop: "15px" }}>{title}</h6>
                          <div className="text">{text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
