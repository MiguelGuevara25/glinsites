import { aboutNine, aboutNineSpanish } from "@/data/aboutSection";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";

const AboutNine = () => {
  const { pathname } = useRouter();
  const { image, icon, title, titleHighlight, text, lists } =
    pathname.split("/")[1] === "es" ? aboutNineSpanish : aboutNine;
  return (
    <section className="about-nine">
      <div className="auto-container">
        <Row>
          <Col lg={6} className="animated fadeInLeft">
            <div className="about-nine__image">
              <Image src={image.src} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-nine__content">
              <div className="about-nine__icon">
                <i className={icon}></i>
              </div>
              <h3 className="about-nine__title">
                {title.split(" ").map((t, i) => (
                  <Fragment key={i}>
                    {t === titleHighlight ? <span>{t}</span> : t}{" "}
                  </Fragment>
                ))}
              </h3>
              <p className="about-nine__summery">{text}</p>
              <ul className="list-unstyled about-nine__list">
                {lists.map((text, i) => (
                  <li key={i}>
                    <i className="flaticon-check"></i>
                    {text}
                  </li>
                ))}
              </ul>

              <a href="#" className="about-nine__btn thm-btn__seven">
                {pathname.split("/")[1] === "es" ? "Empezar" : "Get Started"}
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutNine;
