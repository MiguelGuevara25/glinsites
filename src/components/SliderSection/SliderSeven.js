import { sliderSeven } from "@/data/slider";
import React from "react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper } from "swiper/react";
import SingleSliderSeven from "./SingleSliderSeven";

SwiperCore.use([EffectFade, Autoplay]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  autoplay: { delay: 5000 },
};

const SliderSeven = () => {
  return (
    <section className="slider-seven" id="home">
      <div className="slider-seven__shape-1"></div>

      <Swiper {...options} className="thm-swiper__slider">
        <div className="swiper-wrapper">
          {sliderSeven.map((slider) => (
            <SingleSliderSeven slider={slider} key={slider.id} />
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default SliderSeven;
