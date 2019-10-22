import React from 'react';
import AutocompleteRaw from 'react-toolbox/lib/autocomplete';

import styled from 'styled-components';

const Input = props => <input {...props} />;
const ListItem = props => <div {...props}/>;

// const AutocompleteRaw = autocompleteFactory(ListItem, Input);


const StyledAutocomplete = styled(AutocompleteRaw)`
  ul {
    border: 1px solid #0005;
    padding: 0.2em;
    margin: 0;
    li {
      all: unset;
      display: block;
    }
  }
`;

const Autocomplete = ({ placeholder, label, ...p }) => {
  return (
    <StyledAutocomplete
      direction='down'
      selectedPosition='above'
      label={placeholder || label}
      allowCreate={false}
      multiple={false}
      suggestionMatch={'anywhere'}
      {...p}
    >
    </StyledAutocomplete>
  );
};

export default Autocomplete;
