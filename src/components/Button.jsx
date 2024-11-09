import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  className = "",
  buttonBackgroundColor,
  buttonLabelWidth,
  icons,
  signUp,
  signUpWidth,
  signUpColor,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonBackgroundColor]);

  const buttonLabelStyle = useMemo(() => {
    return {
      width: buttonLabelWidth,
    };
  }, [buttonLabelWidth]);

  const signUpStyle = useMemo(() => {
    return {
      width: signUpWidth,
      color: signUpColor,
    };
  }, [signUpWidth, signUpColor]);

  return (
    <div className={`button ${className}`} style={buttonStyle}>
      <div className="button-label" style={buttonLabelStyle}>
        <img className="icons" alt="" src={icons} />
        <a className="sign-up" style={signUpStyle}>
          {signUp}
        </a>
      </div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.string,
  signUp: PropTypes.string,

  /** Style props */
  buttonBackgroundColor: PropTypes.string,
  buttonLabelWidth: PropTypes.string,
  signUpWidth: PropTypes.string,
  signUpColor: PropTypes.string,
};

export default Button;
