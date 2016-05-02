import React from "react";
import ClassNames from "classnames";

class Player extends React.Component {
  render() {
    const playPauseClass = ClassNames({
      "fa fa-play": this.props.playStatus === "PLAYING" ? false : true,
      "fa fa-pause": this.props.playStatus === "PLAYING" ? true : false
    });

    return (
      <div className="player">
        <div className="player__backward">
          <button onClick={this.props.backward}>
            <span className="fa fa-backward"></span>
          </button>
        </div>
        <div className="player__main">
          <button onClick={this.props.togglePlay}>
            <span className={playPauseClass}></span>
          </button>
          <button onClick={this.props.stop}>
            <span className="fa fa-stop"></span>
          </button>
          <button onClick={this.props.random}>
            <span className="fa fa-random"></span>
          </button>
        </div>
        <div className="player__forward">
          <button onClick={this.props.forward}>
            <span className="fa fa-forward"></span>
          </button>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  backward: React.PropTypes.func.isRequired,
  togglePlay: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired,
  random: React.PropTypes.func.isRequired,
  forward: React.PropTypes.func.isRequired,
}

export default Player;
