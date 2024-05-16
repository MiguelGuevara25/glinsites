import { aboutEight, aboutEightSpanish } from "@/data/aboutSection";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import AboutEightProgress from "./AboutEightProgress";
import { useRouter } from "next/router";

const AboutEight = () => {
  const { pathname } = useRouter();
  const { icon, title, titleHighlight, text, progresses, image } =
    pathname.split("/")[1] === "es" ? aboutEightSpanish : aboutEight;

  return (
    <section className="about-eight">
      <div className="auto-container">
        <Row>
          <Col lg={6}>
            <div className="about-eight__content">
              <div className="about-eight__icon">
                <i className={icon}></i>
              </div>
              <h3 className="about-eight__title">
                {title.split(" ").map((t, i) => (
                  <Fragment key={i}>
                    {t === titleHighlight ? <span>{t}</span> : t}{" "}
                  </Fragment>
                ))}
              </h3>
              <p className="about-eight__summery">{text}</p>

              <div className="about-eight__progress-wrap">
                {progresses.map((progress) => (
                  <AboutEightProgress key={progress.id} progress={progress} />
                ))}
              </div>
              <a href="#" className="about-eight__btn thm-btn__seven">
                {pathname.split("/")[1] === "es" ? "Empezar" : "Get Started"}
              </a>
            </div>
          </Col>
          <Col lg={6} className="animated fadeInRight">
            <div className="about-eight__image">
              <Image src={image.src} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutEight;
