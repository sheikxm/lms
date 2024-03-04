import AboutSectionTwo from "../_components/About/AboutSectionTwo";
import AboutSectionOne from "../_components/About/AboutSectionOne";
import Breadcrumb from "../_components/Common/Breadcrumb";



const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
