import { bannerSectionFour, bannerSectionFourSpanish } from "@/data/bannerSection";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TextSplit from "../Reuseable/TextSplit";
import { useRouter } from "next/router";

SwiperCore.use([Autoplay, EffectFade, Navigation]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: "#banner-section-four__swiper-button-next",
    prevEl: "#banner-section-four__swiper-button-prev",
  },
};

const BannerSectionFour = () => {
  const { pathname } = useRouter();

  return (
    <section className="banner-section-four">
      <div className="banner-section-four__nav">
        <div
          className="swiper-button-prev"
          id="banner-section-four__swiper-button-next"
        >
          <i className="fa fa-angle-up"></i>
        </div>
        <div
          className="swiper-button-next"
          id="banner-section-four__swiper-button-prev"
        >
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
      <Swiper {...options} className="thm-swiper__slider">
        <div className="swiper-wrapper">
          {pathname.split("/")[1] === "es"
            ? bannerSectionFourSpanish.map(({ id, title, text, bg }) => (
                <SwiperSlide key={id}>
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage: `url(${
                        require(`@/images/update-1-12-2020/slider/${bg}`)
                          .default.src
                      })`,
                    }}
                  ></div>
                  <div className="auto-container">
                    <Row>
                      <Col xl={7} lg={7}>
                        <h2>{title}</h2>
                        <p>
                          <TextSplit text={text} />
                        </p>
                        <a href="#" className="theme-btn btn-style-three">
                          Discover More
                        </a>
                      </Col>
                    </Row>
                  </div>
                </SwiperSlide>
              ))
            : bannerSectionFour.map(({ id, title, text, bg }) => (
                <SwiperSlide key={id}>
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage: `url(${
                        require(`@/images/update-1-12-2020/slider/${bg}`)
                          .default.src
                      })`,
                    }}
                  ></div>
                  <div className="auto-container">
                    <Row>
                      <Col xl={7} lg={7}>
                        <h2>{title}</h2>
                        <p>
                          <TextSplit text={text} />
                        </p>
                        <a href="#" className="theme-btn btn-style-three">
                          Discover More
                        </a>
                      </Col>
                    </Row>
                  </div>
                </SwiperSlide>
              ))}
        </div>
      </Swiper>
    </section>
  );
};

export default BannerSectionFour;
