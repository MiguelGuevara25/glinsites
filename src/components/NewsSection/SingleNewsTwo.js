import Link from "next/link";
import { Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleNewsTwo = ({ news = {} }) => {
  const { image, date, comments, title } = news;

  return (
    <SwiperSlide>
      <div className="news-two__box">
        <div className="news-two__image">
          <Image src="/images/projects/cyberborder.png" alt={title} />
        </div>
        <div className="news-two__content">
          {/* <ul className="list-unstyled news-two__meta">
            <li>
              <Link href="/blog-single">{date}</Link>
            </li>
            <li>
              <Link href="/blog-single">
                <a>{comments} Comments</a>
              </Link>
            </li>
          </ul> */}
          <h3>
            <Link href="/blog-single">{title}</Link>
          </h3>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleNewsTwo;
