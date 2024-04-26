import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";
import NewsSectionTwo from "@/components/NewsSection/NewsSectionTwo";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SliderSeven from "@/components/SliderSection/SliderSeven";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Style
        font="Rubik, sans-serif"
        bFont="Rubik, sans-serif"
        black="#2a2833"
        text="#74727a"
        base="#ff4b82"
        baseRgb="255, 75, 130"
        scrollToTopColor="#fff"
        blackRgb="42, 40, 51"
      />
      <HeaderTwo headerStyle="mainmenu-seven" header={7} />
      <MobileMenu onePage/>
      <SearchPopup />
      <SliderSeven />
      <NewsSectionTwo />
      <FooterSeven />
    </Layout>
  );
};

export default Home;
