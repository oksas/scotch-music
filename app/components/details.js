import React from "react";

class Details extends React.Component {

  render() {
    return (
      <div className="details">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

Details.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Details;
