import {
  servicesSectionThree,
  serviceSectionThreeSpanish,
} from "@/data/servicesSection";
import useActive from "@/hooks/useActive";
import React from "react";
import { Row } from "react-bootstrap";
import SingleService from "./SingleService";
import { useRouter } from "next/router";

const { title, services } = servicesSectionThree;
const { titleSpanish, servicesSpanish } = serviceSectionThreeSpanish;

const ServicesSectionThree = ({ className = "" }) => {
  const ref = useActive("#services");
  const { pathname } = useRouter();
  
  const changeInfoSpanish = (pathname) => {
    switch (pathname) {
      case "/index-3":
        return (
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>
                {title} <span className="dot">.</span>
              </h2>
            </div>
            <div className="services">
              <Row className="clearfix">
                {services.map((service) => (
                  <SingleService service={service} key={service.id} />
                ))}
              </Row>
            </div>
          </div>
        );

      case "/es/index-3":
        return (
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>
                {titleSpanish} <span className="dot">.</span>
              </h2>
            </div>
            <div className="services">
              <Row className="clearfix">
                {servicesSpanish?.map((service) => (
                  <SingleService service={service} key={service.id} />
                ))}
              </Row>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      ref={ref}
      className={`services-section-three ${className}`}
      id="services"
    >
      {changeInfoSpanish(pathname)}
    </section>
  );
};

export default ServicesSectionThree;
