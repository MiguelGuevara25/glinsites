import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";
import NewsSectionTwo from "@/components/NewsSection/NewsSectionTwo";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SliderSeven from "@/components/SliderSection/SliderSeven";
import ContactInfoTwo from "@/components/ContactSection/ContactInfoTwo";
import HeaderEight from "@/components/Header/HeaderEight";
import HeaderOne from "@/components/Header/HeaderOne";
import BannerOne from "@/components/BannerSection/BannerOne";
import WhyUs from "@/components/WhyUs/WhyUs";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Style
        // font="Rubik, sans-serif"
        bFont="Rubik, sans-serif"
        black="#2a2833"
        text="#74727a"
        base="#004D80"
        baseRgb="255, 75, 130"
        scrollToTopColor="#fff"
        blackRgb="42, 40, 51"
      />
      {/* <HeaderTwo headerStyle="mainmenu-seven" header={7} /> */}
      <HeaderOne headerStyle="header-style-two" logo={4} onePage/>
      <MobileMenu onePage />
      <SearchPopup />
      {/* <SliderSeven /> */}
      <BannerOne />
      <FeaturedSection />
      <WhyUs />
      <NewsSectionTwo />
      <ContactInfoTwo />
      <FooterSeven />
    </Layout>
  );
};

export default Home;
