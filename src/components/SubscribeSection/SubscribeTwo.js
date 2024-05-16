import { useRouter } from "next/router";
import React from "react";
import { Col, Row } from "react-bootstrap";

const SubscribeTwo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  const { pathname } = useRouter();

  return (
    <section className="subscribe-two">
      <div className="subscribe-two__shape"></div>
      <div className="auto-container">
        <Row>
          <Col md={12} lg={6}>
            {pathname.split("/")[1] === "es" ? (
              <h3 className="subscribe-two__title">
                Suscríbete a nuestro
                <span> Boletín</span> para recibir actualizaciones.
              </h3>
            ) : (
              <h3 className="subscribe-two__title">
                Subscribe Our
                <span>Newsletter</span> to Get New Updates.
              </h3>
            )}
          </Col>
          <Col md={12} lg={6}>
            <form onSubmit={handleSubmit} className="subscribe-two__form">
              <input
                type="email"
                placeholder={
                  pathname.split("/")[1] === "es"
                    ? "Correo Electrónico"
                    : "Email Address"
                }
                name="email"
                required
              />
              <button type="submit">
                <i className="flaticon-right-arrow"></i>
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SubscribeTwo;
