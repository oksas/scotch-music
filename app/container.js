import React from 'react';
import Axios from 'axios';
import Sound from 'react-sound';
import Search from './components/search';
import Details from './components/details';
import Player from './components/player';
import Progress from './components/progress';
import Footer from './components/footer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.client_id = '983e8eb48daa6e8204e369a99cba62ce';
    this.state = {
      track: {
        stream_url: '',
        title: '',
        artwork_url: ''
      },
      tracks: [],
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      totalRaw: 0,
      position: 0,
      playFromPosition: 0,
      autoCompleteValue: ''
    };
    this.handleSongFinished = this.handleSongFinished.bind(this);
    this.handleSongPlaying = this.handleSongPlaying.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.stop = this.stop.bind(this);
    this.randomTrack = this.randomTrack.bind(this);
    this.handleProgressClick = this.handleProgressClick.bind(this);
  }

  componentDidMount() {
    this.randomTrack();
  }

  prepareUrl(url) {
    return `${url}?client_id=${this.client_id}`;
  }

  togglePlay() {
    if (this.state.playStatus === Sound.status.PLAYING) {
      this.setState({ playStatus: Sound.status.PAUSED });
    } else {
      this.setState({ playStatus: Sound.status.PLAYING });
    }
  }

  forward() {
    this.setState({
      playFromPosition: this.state.playFromPosition += 1000*10
    });
  }

  backward() {
    this.setState({
      playFromPosition: this.state.playFromPosition -= 1000*10
    });
  }

  stop() {
    this.setState({
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      position: 0
    });
  }

  handleSelect(value, item) {
    this.setState({
      autoCompleteValue: value,
      track: item,
      playStatus: Sound.status.PLAYING
    });
  }

  handleProgressClick(event) {
    const clickedSpot = event.nativeEvent.offsetX;
    const totalWidth = event.nativeEvent.target.clientWidth;
    this.setState({
      playFromPosition: (clickedSpot / totalWidth) * this.state.totalRaw,
      playStatus: Sound.status.PLAYING
    });
  }

  handleChange(event, value) {
    this.setState({
      autoCompleteValue: event.target.value
    });
    Axios.get(`https://api.soundcloud.com/tracks?client_id=${this.client_id}&q=${value}`)
      .then(response => {
        this.setState({
          tracks: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  formatMilliseconds(milliseconds) {
    const hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;

    const minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;

    const seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    const left = minutes < 10 ? `0${minutes}` : minutes;
    const right = seconds < 10 ? `0${seconds}` : seconds;

    return `${left}:${right}`;
  }

  handleSongPlaying(audio) {
    this.setState({
      elapsed: this.formatMilliseconds(audio.position),
      total: this.formatMilliseconds(audio.duration),
      totalRaw: audio.duration,
      position: audio.position / audio.duration
    });
  }

  handleSongFinished() {
    this.randomTrack();
  }

  randomTrack() {
    Axios.get(`https://api.soundcloud.com/playlists/1357868?client_id=${this.client_id}`)
      .then(response => {
        const trackLength = response.data.tracks.length;
        const randomNumber = Math.floor((Math.random() * trackLength) + 1);
        this.setState({track: response.data.tracks[randomNumber]});
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="scotch_music">
        <Search
          autoCompleteValue={this.state.autoCompleteValue}
          tracks={this.state.tracks}
          handleSelect={this.handleSelect}
          handleChange={this.handleChange} />
        <Details title={this.state.track.title} />
        <Sound
          url={this.prepareUrl(this.state.track.stream_url)}
          playStatus={this.state.playStatus}
          onPlaying={this.handleSongPlaying}
          playFromPosition={this.state.playFromPosition}
          onFinishedPlaying={this.handleSongFinished} />
        <Player
          togglePlay={this.togglePlay}
          stop={this.stop}
          playStatus={this.state.playStatus}
          forward={this.forward}
          backward={this.backward}
          random={this.randomTrack} />
        <Progress
          elapsed={this.state.elapsed}
          total={this.state.total}
          position={this.state.position}
          handleProgressClick={this.handleProgressClick} />
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
