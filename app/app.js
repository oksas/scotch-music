import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("content"));
