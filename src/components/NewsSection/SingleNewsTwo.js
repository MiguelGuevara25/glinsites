import Link from "next/link";
import { Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleNewsTwo = ({ news = {} }) => {
  const { image, date, comments, title, href } = news;

  return (
    <SwiperSlide>
      <div className="news-two__box">
        <div className="news-two__image">
          <a
            href={href}
            target="_blank"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={`/images/projects/${image}`} alt={title} />
          </a>
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
            <a href={href} target="_blank">
              {title}
            </a>
          </h3>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleNewsTwo;
