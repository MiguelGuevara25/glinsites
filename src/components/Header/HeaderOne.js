import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import { useRouter } from "next/router";

const {
  title,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo9,
  title2,
  navItems,
  navItemsTwo,
  phone,
  socials,
} = headerData;

const HeaderOne = ({
  headerStyle = "header-style-one",
  logo = 1,
  onePage = false,
  topBar = false,
  autoContainer = false,
  links = true,
}) => {
  const { scrollTop } = useScroll(120);
  const { toggleMenu, toggleSearch } = useRootContext();
  const newNavItems = onePage ? navItemsTwo : navItems;
  let Logo =
    logo === 2
      ? logo2
      : logo === 3
      ? logo3
      : logo === 5
      ? logo5
      : logo === 9
      ? logo9
      : logo1;

  if (logo === 4) {
    if (scrollTop) {
      Logo = logo1;
    } else {
      Logo = logo4;
    }
  }

  const navSpanish = [
    {
      id: 1,
      name: "Inicio",
      href: "/",
    },
    {
      id: 2,
      name: "Proyectos",
      href: "#portfolio",
    },
    {
      id: 3,
      name: "Contacto",
      href: "#contact",
    },
  ];

  const changeLanguage = (pathname) => {
    switch (pathname) {
      case "/":
        return (
          <ul className="list__language">
            <li>
              <a href="/es">Spanish</a>
            </li>
          </ul>
        );

      case "/es":
        return (
          <ul className="list__language">
            <li>
              <a href="/">Inglés</a>
              
            </li>
          </ul>
        );

      case "/index-3":
        return (
          <ul className="list__language">
            <li>
              <a href="/es/index-3">Spanish</a>
            </li>
          </ul>
        );
    }
  };

  const { pathname } = useRouter();

  return (
    <header
      className={`main-header${
        scrollTop ? " fixed-header" : ""
      } ${headerStyle}`}
    >
      {topBar && (
        <div className="topbar-four">
          <div className="auto-container">
            <p>{title2}</p>
            <div className="right-content">
              <div className="phone">
                <span className="icon flaticon-call"></span>
                <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
              </div>
              <ul className="list-unstyled social-links">
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <a href={href}>
                      <span className={icon}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="header-upper">
        <div className={autoContainer ? "inner-container clearfix" : ""}>
          <div
            className={
              autoContainer ? "auto-container" : "inner-container clearfix"
            }
          >
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <a title={title}>
                    <Image
                      id="thm-logo"
                      src={Logo.src}
                      alt={title}
                      title={title}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <div onClick={toggleMenu} className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
                <span className="txt">Menu</span>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className={
                    autoContainer
                      ? ""
                      : "collapse navbar-collapse show clearfix"
                  }
                  id={autoContainer ? "" : "navbarSupportedContent"}
                >
                  {pathname === "/es" ? (
                    <ul className="navigation clearfix">
                      {navSpanish.map((navItem) => (
                        <NavItem
                          navItem={navItem}
                          key={navItem.id}
                          onePage={onePage}
                        />
                      ))}
                    </ul>
                  ) : (
                    <ul className="navigation clearfix">
                      {newNavItems.map((navItem) => (
                        <NavItem
                          navItem={navItem}
                          key={navItem.id}
                          onePage={onePage}
                        />
                      ))}
                    </ul>
                  )}
                  {/* <ul className="navigation clearfix">
                    {newNavItems.map((navItem) => (
                      <NavItem
                        navItem={navItem}
                        key={navItem.id}
                        onePage={onePage}
                      />
                    ))}
                  </ul> */}
                </div>
              </nav>
            </div>

            {links && (
              <div className="other-links clearfix">
                {/* <div className="cart-btn" style={{ color: "black" }}>
                  <Link href="/cart">
                    <a className="theme-btn cart-toggler">
                      <span className="flaticon-shopping-cart"></span>
                    </a>
                  </Link>
                </div> */}

                <div className="search-btn">
                  <ul>
                    <li>
                      <a href={changeLanguage(pathname)}>
                        <button
                          type="button"
                          className="theme-btn search-toggler"
                        >
                          <span
                            className="flaticon-worldwide"
                            style={{ fontSize: "30px" }}
                          ></span>
                        </button>
                      </a>

                      {changeLanguage(pathname)}
                    </li>
                  </ul>
                </div>

                {/* <div className="link-box" style={{ color: "black" }}>
                  <div className="call-us">
                    <a
                      className="link"
                      href={`tel:${phone.split(" ").join("")}`}
                    >
                      <span className="icon"></span>
                      <span className="sub-text">Call Anytime</span>
                      <span className="number">{phone}</span>
                    </a>
                  </div>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
