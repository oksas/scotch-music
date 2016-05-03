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

const Search = ({tracks, handleSelect, handleChange}) => {

  return (
    <div className="search">
      <AutoComplete
        ref="autocomplete"
        inputProps={{title: "Title"}}
        items={tracks}
        getItemValue={(item) => item.title}
        onSelect={handleSelect}
        onChange={handleChange}
        renderItem={handleRenderItem}
      />
    </div>
  );
};

Search.propTypes = {
  tracks: React.PropTypes.array.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired
}

export default Search;
