import React from "react";

const Progress = ({elapsed, position, total, handleProgressClick}) => {
  return (
    <div className="progress">
      <span className="player__time-elapsed">{elapsed}</span>
      <progress
        value={position}
        max="1"
        onClick={handleProgressClick} />
      <span className="player__time-total">{total}</span>
    </div>
  );
};

Progress.propTypes = {
  elapsed: React.PropTypes.string.isRequired,
  position: React.PropTypes.number.isRequired,
  total: React.PropTypes.string.isRequired,
  handleProgressClick: React.PropTypes.func.isRequired
};

export default Progress;
