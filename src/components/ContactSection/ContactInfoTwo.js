import { contactInfoTwo } from "@/data/contactSection";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";

const ContactInfoTwo = () => {
  const { pathname } = useRouter();

  return (
    <section className="contact-info-two" id="contact">
      <div className="auto-container">
        <div className="sec-title-two text-center">
          {pathname === "/es" ? <h2>Contáctenos</h2> : <h2>Contact Us</h2>}
        </div>
        <Row>
          {contactInfoTwo.map(({ id, icon, text, email, phone }) => (
            <Col key={id} md={12} lg={4}>
              <div className="contact-info-two__card animated fadeInUp">
                <i className={icon}></i>
                <a
                  href={
                    email
                      ? `mailto:${email}`
                      : phone
                      ? `tel:${text.split(" ").join("")}`
                      : "#"
                  }
                >
                  {text}
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ContactInfoTwo;
