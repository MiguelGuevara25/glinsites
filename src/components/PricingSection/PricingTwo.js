import { pricingTwo, pricingTwoSpanish } from "@/data/pricingSection";
import { useState } from "react";
import { Row } from "react-bootstrap";
import SinglePricingTwo from "./SinglePricingTwo";
import { useRouter } from "next/router";

const PricingTwo = () => {
  const { pathname } = useRouter();
  const [isMonth, setIsMonth] = useState(true);

  return (
    <section className="pricing-two">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          {pathname.split("/")[1] === "es" ? (
            <h2 className="sec-title-seven__title">
              Elija <span>Planes de Precios</span> <br /> Que se Adapten a sus
              Necesidades
            </h2>
          ) : (
            <h2 className="sec-title-seven__title">
              Choose <span>Pricing Plans</span> <br /> Which Suits Your Needs
            </h2>
          )}
        </div>
        <ul
          className="list-inline text-center switch-toggler-list"
          role="tablist"
          id="switch-toggle-tab"
        >
          {pathname.split("/")[1] === "es"
            ? pricingTwoSpanish.map(({ id, className, name }) => (
                <li
                  onClick={() => setIsMonth(className === "month")}
                  key={id}
                  className={`${className}${
                    (isMonth && className === "month") ||
                    (!isMonth && className === "year")
                      ? " active"
                      : ""
                  }`}
                >
                  <a>{name}</a>
                </li>
              ))
            : pricingTwo.map(({ id, className, name }) => (
                <li
                  onClick={() => setIsMonth(className === "month")}
                  key={id}
                  className={`${className}${
                    (isMonth && className === "month") ||
                    (!isMonth && className === "year")
                      ? " active"
                      : ""
                  }`}
                >
                  <a>{name}</a>
                </li>
              ))}
          <li>
            <label
              onClick={() => setIsMonth((pre) => !pre)}
              className={`switch ${isMonth ? "on" : "off"}`}
            >
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
        <div className="tabed-content">
          {pathname.split("/")[1] === "es"
            ? pricingTwoSpanish.map(({ id, className, allPricingSpanish }) => (
                <div
                  key={id}
                  id={className}
                  className={`animated fadeInUp ${
                    (isMonth && className === "month") ||
                    (!isMonth && className === "year")
                      ? "d-block"
                      : "d-none"
                  }`}
                >
                  <Row>
                    {allPricingSpanish.map((pricing) => (
                      <SinglePricingTwo pricing={pricing} key={pricing.id} />
                    ))}
                  </Row>
                </div>
              ))
            : pricingTwo.map(({ id, className, allPricing }) => (
                <div
                  key={id}
                  id={className}
                  className={`animated fadeInUp ${
                    (isMonth && className === "month") ||
                    (!isMonth && className === "year")
                      ? "d-block"
                      : "d-none"
                  }`}
                >
                  <Row>
                    {allPricing.map((pricing) => (
                      <SinglePricingTwo pricing={pricing} key={pricing.id} />
                    ))}
                  </Row>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTwo;
