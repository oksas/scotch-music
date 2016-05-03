import React from "react";
import AutoComplete from "react-autocomplete";

const handleRenderItem = (item, isHighlighted) => {
  let listStyles = {
    item: {
      padding: "2px 6px",
      cursor: "default"
    },
    highlightedItem: {
      color: "white",
      background: "#f38b72",
      padding: "2px 6px",
      cursor: "defualt"
    }
  };

  return (
    <div
      style={isHighlighted ? listStyles.highligtedItem : listStyles.item}
      key={item.id}
      id={item.id}>
      {item.title}
    </div>
  );
};

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <AutoComplete
          ref="autocomplete"
          inputProps={{title: "Title"}}
          value={this.props.autoCompleteValue}
          items={this.props.tracks}
          getItemValue={(item) => item.title}
          onSelect={this.props.handleSelect}
          onChange={this.props.handleChange}
          renderItem={handleRenderItem}
        />
      </div>
    );
  }
}

Search.propTypes = {
  tracks: React.PropTypes.array.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  autoCompleteValue: React.PropTypes.string.isRequired
};

export default Search;
