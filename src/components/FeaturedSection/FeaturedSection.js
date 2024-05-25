import featuredSection from "@/data/featuredSection";
import { useRouter } from "next/router";
import { Col, Image, Row } from "react-bootstrap";

const { image, title, text, features } = featuredSection;

const FeaturedSection = ({ className = "" }) => {
  const { pathname } = useRouter();

  const titleEnglish = "Welcome to glinsites";
  const textEnglish =
    "In a world where digital presence is vital, we offer you the key to online success. We are a passionate team of web developers, experts in turning ideas into exceptional digital experiences. From conceptualization to implementation, our experience and creativity combine to bring your web projects to life. Whether you need an elegant and functional website or a complex custom platform, we are here to make it happen. Let us take you by the hand on this exciting digital journey. Your vision, our passion. Together, let's make your online presence stand out. Start your journey with us today!";

  return (
    <section
      className={`featured-section ${className}`}
      style={{ paddingTop: "100px", paddingBottom: "50px" }}
    >
      <div className="auto-container">
        <Row className="row clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner animated fadeInLeft">
              <div className="image-box">
                <Image style={{height: "350px"}} src={image.src} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="sec-title-two">
                <h2>{pathname === "/es" ? title : titleEnglish}</h2>
                <div className="lower-text">
                  {pathname === "/es" ? text : textEnglish}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeaturedSection;
