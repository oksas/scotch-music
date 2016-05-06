import React from 'react';

const Details = ({title}) => {
  return (
    <div>
      <h3 className="details__title">{title}sup</h3>
    </div>
  );
};

Details.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Details;
