import PropTypes from "prop-types";
import "./Team.css";

const Team = ({ className = "" }) => {
  return (
    <section className={`team ${className}`}>
      <img className="image-4-icon" alt="" src="/image-2@2x.png" />
      <div className="team-details">
        <div className="team-details-child" />
        <h1 className="members">Members</h1>
        <div className="member-list">
          <h3 className="back-end-back-end-container">
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">최원재:</p>
            <p className="blank-line">Back-end</p>
            <p className="blank-line">김진형:</p>
            <p className="blank-line">Back-end</p>
            <p className="blank-line">웨얀:</p>
            <p className="blank-line">Front-end</p>
            <p className="blank-line">이인경:</p>
            <p className="blank-line">Front-end</p>
            <p className="blank-line">박알렉산더알렉세예비츠:</p>
            <p className="blank-line">Team lead/Design</p>
          </h3>
          <img
            className="floral-background-art-ink-beau-icon"
            loading="lazy"
            alt=""
            src="/floralbackgroundartinkbeautyelement-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Team.propTypes = {
  className: PropTypes.string,
};

export default Team;
