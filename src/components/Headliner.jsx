import Button from "./Button";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import "./Headliner.css";

const Headliner = ({ className = "" }) => {
  return (
    <header className={`headliner ${className}`}>
      <div className="headliner1" />
      <div className="header-links">
        <div className="navigation-links">
          <div className="links-container">
            <div className="links">
              <a className="home">Home</a>
              <a className="about-us">About us</a>
              <a className="previous-canvas">Previous canvas</a>
              <img
                className="sim-1-icon"
                loading="lazy"
                alt=""
                src="/sim-1@2x.png"
              />
            </div>
          </div>
          <div className="user-actions">
            <div className="auth-buttons">
              <div className="login-sign-up">
                <Button icons="pending_I3:293;1:81;26:2567" signUp="Log in" />
                <Button
                  buttonBackgroundColor="#111"
                  buttonLabelWidth="62px"
                  icons="pending_I3:293;1:82;26:2567"
                  signUp="Sign up"
                  signUpWidth="63px"
                  signUpColor="#fff"
                />
                <div className="dropdown-container">
                  <Dropdown />
                </div>
              </div>
            </div>
            <div className="dark-mode">
              <img
                className="waning-cresent-moon-night-new-icon"
                loading="lazy"
                alt=""
                src="/waningcresentmoonnightnewmooncrescentweathertimewaning.svg"
              />
              <div className="dark-mode-toggle" />
            </div>
          </div>
        </div>
      </div>
      <div className="divider" />
    </header>
  );
};

Headliner.propTypes = {
  className: PropTypes.string,
};

export default Headliner;
