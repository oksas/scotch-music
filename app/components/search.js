import React from "react";
import AutoComplete from "react-autocomplete";

class Search extends React.Component {
  constructor() {
    super();
    this.handleRenderItem = this.handleRenderItem.bind(this);
  }

  handleRenderItem(item, isHighligted) {
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
        id={item.id}
      >{item.title}</div>
    );
  }

  render() {
    return (
      <div className="search">
        <AutoComplete
          ref="autocomplete"
          inputProps={{title: "Title"}}
          items={this.props.tracks}
          getItemValue={(item) => item.title}
          onSelect={this.props.handleSelect}
          onChange={this.props.handleChange}
          renderItem={this.handleRenderItem}
        />
      </div>
    );
  }
}

Search.propTypes = {
  items: React.PropTypes.array.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired
}

export default Search;
