import Link from "next/link";
import React, { forwardRef } from "react";
import TextSplit from "../Reuseable/TextSplit";
import { useRouter } from "next/router";

const SlideItemThree = ({ slide = {} }, ref) => {
  const { bg, title, text } = slide;

  const { pathname } = useRouter();

  const changeTitle = (pathname) => {
    switch (pathname) {
      case "/index-3":
        return (
          <div className="inner">
            <h1>
              <TextSplit text={title} />
            </h1>
            <div className="text">{text}</div>
            <div className="link-box">
              <Link href="/about">
                <a className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Discover More</span>
                </a>
              </Link>
            </div>
          </div>
        );

      case "/es/index-3":
        return (
          <div className="inner">
            <h1>
              <TextSplit text="La mejor agencia de marketing" />
            </h1>
            <div className="text">
              Nos comprometemos a proporcionar a nuestros clientes un servicio
              excepcional y a ofrecer a nuestros empleados la mejor form  ación.
            </div>
            <div className="link-box">
              <Link href="/about">
                <a className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Descubre más</span>
                </a>
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ userSelect: "none" }} ref={ref} className="slide-item">
      <div className="round-shape-1"></div>
      <div className="round-image">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              require(`@/images/main-slider/${bg}`).default.src
            })`,
          }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">{changeTitle(pathname)}</div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItemThree);
