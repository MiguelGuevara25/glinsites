import { serviceSeven, serviceSevenSpanish } from "@/data/servicesSection";
import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";

const ServiceSeven = () => {
  const { pathname } = useRouter();

  return (
    <section className="service-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          {pathname.split("/")[1] === "es" ? (
            <h2 className="sec-title-seven__title">
              Consulte nuestros <span>Servicios</span>
              <br />
              de la Empresa a continuación
            </h2>
          ) : (
            <h2 className="sec-title-seven__title">
              Checkout Our <span>Company</span>
              <br />
              Services Below
            </h2>
          )}
        </div>
        <Row>
          {pathname.split("/")[1] === "es"
            ? serviceSevenSpanish.map(({ id, icon, title, href, text }) => (
                <Col key={id} md={6} lg={3}>
                  <div className="service-seven__item animated fadeInLeft">
                    <div className="service-seven__icon">
                      <i className={icon}></i>
                    </div>
                    <h3 className="service-seven__title">
                      <Link href={href}>{title}</Link>
                    </h3>
                    <p className="service-seven__text">{text}</p>
                    <Link href={href}>
                      <a className="service-seven__link">
                        <i className="flaticon-right-arrow"></i>
                      </a>
                    </Link>
                  </div>
                </Col>
              ))
            : serviceSeven.map(({ id, icon, title, href, text }) => (
                <Col key={id} md={6} lg={3}>
                  <div className="service-seven__item animated fadeInLeft">
                    <div className="service-seven__icon">
                      <i className={icon}></i>
                    </div>
                    <h3 className="service-seven__title">
                      <Link href={href}>{title}</Link>
                    </h3>
                    <p className="service-seven__text">{text}</p>
                    <Link href={href}>
                      <a className="service-seven__link">
                        <i className="flaticon-right-arrow"></i>
                      </a>
                    </Link>
                  </div>
                </Col>
              ))}
        </Row>
      </div>
    </section>
  );
};

export default ServiceSeven;
