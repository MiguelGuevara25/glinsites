import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CallToSectionTwo = ({
  className = "",
  btnClassName = "btn-style-two",
}) => {
  const { pathname } = useRouter();

  const changeInfoSpanish = (pathname) => {
    switch (pathname) {
      case "/index-3":
        return (
          <div className="inner clearfix">
            <h2>
              We’re Ready to Bring Bigger <br />& Stronger Projects
            </h2>
            <div className="link-box">
              <Link href="/contact">
                <a className={`theme-btn ${btnClassName}`}>
                  <i className="btn-curve"></i>
                  <span className="btn-title">Contact with us</span>
                </a>
              </Link>
            </div>
          </div>
        );

      case "/es/index-3":
        return (
          <div className="inner clearfix">
            <h2>
              Estamos listos para traer proyectos <br /> más grandes y fuertes
            </h2>
            <div className="link-box">
              <Link href="/contact">
                <a className={`theme-btn ${btnClassName}`}>
                  <i className="btn-curve"></i>
                  <span className="btn-title">Contáctanos</span>
                </a>
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <section className={`call-to-section-two ${className}`}>
      <div className="auto-container">{changeInfoSpanish(pathname)}</div>
    </section>
  );
};

export default CallToSectionTwo;
