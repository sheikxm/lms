import AboutSectionTwo from "../_components/About/AboutSectionTwo";
import AboutSectionOne from "../_components/About/AboutSectionOne";
import Breadcrumb from "../_components/Common/Breadcrumb";
import Header from "../_components/Header";
import Footer from "../_components/Footer";




const AboutPage = () => {
  return (
    <>
    <Header/>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Footer/>
    </>
  );
};

export default AboutPage;
