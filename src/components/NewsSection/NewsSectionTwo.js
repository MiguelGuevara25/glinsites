import { newsSectionTwo, newsSectionTwoSpanish } from "@/data/newsSection";
import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import SingleNewsTwo from "./SingleNewsTwo";
import { useRouter } from "next/router";

SwiperCore.use([Pagination, Autoplay]);

const options = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  slidesPerGroup: 2,
  pagination: {
    el: "#news-two-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
  },
};

const { tagline, title, newses } = newsSectionTwo;
const { title2, newses2 } = newsSectionTwoSpanish;

const NewsSectionTwo = () => {
  const { pathname } = useRouter();

  return (
    <section className="news-two" id="portfolio">
      {pathname === "/es" ? (
        <div className="auto-container">
          <div className="sec-title-two text-center">
            <h2>{title2}</h2>
          </div>
          <Swiper {...options} className="thm-swiper__slider">
            <div className="swiper-wrapper">
              {newses2.map((news) => (
                <SingleNewsTwo key={news.id} news={news} />
              ))}
            </div>
            <div className="swiper-pagination" id="news-two-pagination"></div>
          </Swiper>
        </div>
      ) : (
        <div className="auto-container">
          <div className="sec-title-two text-center">
            <h2>{title}</h2>
          </div>
          <Swiper {...options} className="thm-swiper__slider">
            <div className="swiper-wrapper">
              {newses.map((news) => (
                <SingleNewsTwo key={news.id} news={news} />
              ))}
            </div>
            <div className="swiper-pagination" id="news-two-pagination"></div>
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default NewsSectionTwo;
