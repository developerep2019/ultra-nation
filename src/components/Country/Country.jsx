import React from 'react';

const Country = (props) => {
  const { name, population, flag } = props.country;
  const countryStyle = {
    border: '1px solid red',
    margin: '10px',
    padding: '10px',
  };
  return (
    <div style={countryStyle}>
      <h4>This is {name}</h4>
      population : {population}
      <br />
      <img src={flag} alt='' style={{ width: '100px', marginTop: '20px' }} />
      <br />
      <button
        onClick={() => {
          props.handleAddCountry(props.country);
        }}
      >
        Add Country
      </button>
    </div>
  );
};

export default Country;
