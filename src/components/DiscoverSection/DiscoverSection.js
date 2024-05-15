import discoverSection from "@/data/discoverSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import { useRouter } from "next/router";

const { title, discovers } = discoverSection;

const DiscoverSection = ({ ShowTitle = true }) => {
  const { pathname } = useRouter();

  return (
    <section className="discover-section">
      <div className="auto-container">
        {ShowTitle && (
          <div className="sec-title centered">
            <h2>
              <TextSplit
                text={
                  pathname === "/index-3"
                    ? title
                    : "DESCUBRA EL MUNDO DE LA MEJOR AGENCIA GLINSITES"
                }
              />
              <span className="dot">.</span>
            </h2>
          </div>
        )}
        <Row className="clearfix">
          {discovers.map(({ id, image, title }) => (
            <Col key={id} lg={6} md={12} sm={12} className="discover-block">
              <div className="inner-box">
                <div className="image-box">
                  <Image
                    src={require(`@/images/resource/${image}`).default.src}
                    alt=""
                  />
                </div>
                <div className="cap-box animated fadeInUp">
                  <div className="cap-inner">
                    <h5>{title}</h5>
                    <div className="more-link">
                      <Link href="/">
                        <a>
                          <span className="fa fa-angle-right"></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default DiscoverSection;
