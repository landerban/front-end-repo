import Headliner from "./Headliner";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`image-2-parent ${className}`}>
      <img
        className="image-2-icon"
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
      />
      <Headliner />
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
