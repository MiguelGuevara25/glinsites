import BannerFour from "@/components/BannerSection/BannerFour";
import BrandPortfolio from "@/components/BrandPortfolio/BrandPortfolio";
import ContactInfos from "@/components/ContactInfos/ContactInfos";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterFour from "@/components/MainFooter/FooterFour";
import FooterSeven from "@/components/MainFooter/FooterSeven";
import Style from "@/components/Reuseable/Style";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import TestimonialsSix from "@/components/TestimonialsSection/TestimonialsSix";
import preloader from "@/images/colors/color-8/icons/preloader.png";
import React from "react";

const Home5 = () => {
  return (
    <Layout pageTitle="Home 05" preloader={preloader}>
      <Style
        font="Jost, sans-serif"
        bFont="Jost, sans-serif"
        black="#1e1e1e"
        text="#929292"
        base="#004D80"
        baseRgb="228, 52, 52"
        scrollToTopColor="#fff"
        scrollToTopBg="var(--thm-black)"
        scrollToTopHoverColor="var(--thm-black)"
        scrollToTopHoverBg="#fff"
      />
      <HeaderOne
        logo={5}
        headerStyle="header-style-one header-style-eight"
        autoContainer
        onePage
        links={false}
      />
      <MobileMenu />
      <BannerFour />
      <BrandPortfolio />
      <TestimonialsSix />
      <SponsorsSection />
      {/* <ContactInfos /> */}
      <FooterSeven />
    </Layout>
  );
};

export default Home5;
