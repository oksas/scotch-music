import React from 'react';
import classNames from 'classnames';

const Player = ({playStatus, backward, togglePlay, stop, random, forward}) => {
  const playPauseClass = classNames({
    'fa fa-play': playStatus === 'PLAYING' ? false : true,
    'fa fa-pause': playStatus === 'PLAYING' ? true : false
  });

  return (
    <div className="player">
      <div className="player__backward">
        <button onClick={backward}>
          <span className="fa fa-backward"></span>
        </button>
      </div>
      <div className="player__main">
        <button onClick={togglePlay}>
          <span className={playPauseClass}></span>
        </button>
        <button onClick={stop}>
          <span className="fa fa-stop"></span>
        </button>
        <button onClick={random}>
          <span className="fa fa-random"></span>
        </button>
      </div>
      <div className="player__forward">
        <button onClick={forward}>
          <span className="fa fa-forward"></span>
        </button>
      </div>
    </div>
  );
};

Player.propTypes = {
  playStatus: React.PropTypes.string.isRequired,
  backward: React.PropTypes.func.isRequired,
  togglePlay: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired,
  random: React.PropTypes.func.isRequired,
  forward: React.PropTypes.func.isRequired,
};

export default Player;
