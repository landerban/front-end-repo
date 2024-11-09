import FrameComponent from "../components/FrameComponent";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <FrameComponent />
      <img className="image-3-icon" alt="" src="/image-2@2x.png" />
      <AboutUs />
      <Team />
    </div>
  );
};

export default AboutUsPage;
