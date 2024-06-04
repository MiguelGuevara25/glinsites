import { mainFooter, mainFooterSpanish } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import { useRouter } from "next/router";

const { year, author, logo7, about2, socials, links, email, phone, address } =
  mainFooter;

const { links2 } = mainFooterSpanish;

const FooterSeven = () => {
  const { pathname } = useRouter();

  return (
    <>
      <footer className="footer-seven">
        <div className="auto-container">
          <Row>
            <Col md={12} lg={5}>
              <div className="footer-seven__widget footer-seven__about">
                <a href="index-main.html">
                  <Image src={logo7.src} width={200} alt="" />
                </a>
                <p className="footer-seven__about__text">
                  <a href={`tel:${phone.split(" ").join("-")}`}>{phone}</a>{" "}
                  <br />
                  <a href={`mailto:${email}`}>{email}</a> <br />
                </p>
              </div>
            </Col>

            <Col md={12} lg={5}>
              {pathname.split("/")[1] === "es" ? (
                <div className="footer-seven__widget footer-seven__links">
                  <h3 className="footer-seven__title">Explora</h3>
                  <ul className="list-unstyled footer-seven__links__list">
                    {links2.slice(0, 5).map(({ id, href, title }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="footer-seven__widget footer-seven__links">
                  <h3 className="footer-seven__title">Explore</h3>
                  <ul className="list-unstyled footer-seven__links__list">
                    {links.slice(0, 5).map(({ id, href, title }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Col>

            <Col md={12} lg={2}>
              <div className="footer-seven__widget footer-seven__social">
                {socials.map(({ id, icon, href }) => (
                  <a href={href} key={id} className={icon} target="_blank"></a>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <section className="footer-seven__copyright">
        <div className="auto-container text-center">
          <p>
            © copyright {year} by {author}
          </p>
        </div>
      </section>
    </>
  );
};

export default FooterSeven;
