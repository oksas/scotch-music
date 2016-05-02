import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/search";
import Details from "./components/details";

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Details title={"Hot-Head Bop"} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("content"));
