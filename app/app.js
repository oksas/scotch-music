import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/search";
import Details from "./components/details";
import Player from "./components/player";
import Progress from "./components/progress";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Details title={"Hot-Head Bop"} />
        <Player />
        <Progress
          position={"0.1"}
          elapsed={"00:20"}
          total={"0:40"}/>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("content"));
