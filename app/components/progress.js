import React from "react";

class Progress extends React.Component {
  render() {
    return (
      <div className="progress">
        <span className="player__time-elapsed">{this.props.elapsed}</span>
        <progress
          value={this.props.position}
          max="1" />
        <span className="player__time-total">{this.props.total}</span>
      </div>
    );
  }
}

Progress.propTypes = {
  elapsed: React.PropTypes.string.isRequired,
  position: React.PropTypes.string.isRequired,
  total: React.PropTypes.string.isRequired
};

export default Progress;
