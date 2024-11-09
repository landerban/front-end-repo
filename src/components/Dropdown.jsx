import PropTypes from "prop-types";
import "./Dropdown.css";

const Dropdown = ({ className = "" }) => {
  return (
    <div className={`dropdown ${className}`}>
      <a className="text">English (united States)</a>
      <img className="icons1" alt="" src="/icons.svg" />
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
};

export default Dropdown;
