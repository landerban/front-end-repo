import PropTypes from "prop-types";
import "./AboutUs.css";

const AboutUs = ({ className = "" }) => {
  return (
    <div className={`about-us1 ${className}`}>
      <div className="about-us-child" />
      <h1 className="moto">MOTO</h1>
      <div className="description">
        <img
          className="china-brush-element-red-cultur-icon"
          loading="lazy"
          alt=""
          src="/chinabrushelementredculturebird-1@2x.png"
        />
        <h3 className="this-website-was">
          This website was created by a team of enthusiastic students for a
          hackathon with the theme of Art. Our concept combines traditional
          Korean art with interactive modern elements, inviting users to explore
          a unique experiment. We wanted to see how users, when provided with a
          clear vision and guidelines for an intended final image, would react
          if given complete freedom in their actions. Would they work together
          to recreate the intended artwork, or would they diverge, transforming
          it into something entirely new and original?
        </h3>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
