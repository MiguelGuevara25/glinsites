import React, { forwardRef } from "react";
import photoSlide from "../../../public/images/sliderPrincipal.jpeg";
import photoSlideEffect from "../../../public/images/logoGlinsiteHorizontalBlanco.png";
import { useRouter } from "next/router";

const SlideItemOne = ({ slide = {} }, ref) => {
  const { bg, subtitle, title, title2 } = slide;
  const { pathname } = useRouter();

  return (
    <div ref={ref} style={{ userSelect: "none" }} className="slide-item">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${photoSlide.src})`,
        }}
      ></div>
      {/* <div className="left-top-line"></div> */}
      {/* <div className="right-bottom-curve"></div> */}
      <div className="right-top-curve"></div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              {/* <div className="sub-title">Glinsites</div> */}
              <img
                src={photoSlideEffect.src}
                className="imagen__effect__principal"
              />
              <h1
                style={{ textAlign: "center", paddingTop: "50px" }}
                className="titulo__effect__principal"
              >
                {/* <TextSplit text={title} /> */}
                {pathname === "/es"
                  ? "Tu Marca al Siguiente Nivel"
                  : "Level Up Your Branding"}
              </h1>
              {/* <div className="link-box">
                <Link href="/about">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Discover More</span>
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItemOne);
