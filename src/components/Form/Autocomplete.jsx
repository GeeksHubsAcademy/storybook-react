import React, { useState, useEffect } from 'react';
// import AutocompleteRaw from 'react-toolbox/lib/autocomplete';
import Autosuggest from 'react-autosuggest';

import styled from 'styled-components';

const Input = props => <input {...props} />;

const StyledAutocomplete = styled.span`
  position: relative !important;
  * {
    box-sizing: border-box;
  }

  .highlighted {
    text-decoration: underline;
  }
  ul[role='listbox'] {
    width: 100%;
    width: intrinsic; /* Safari/WebKit uses a non-standard name */
    width: -moz-max-content; /* Firefox/Gecko */
    width: -webkit-max-content; /* Chrome */
    position: absolute !important;
    right: 0;
    left: 0;
    padding: 0.4em 0;
    margin: 0;
    z-index: 3;
    background: white;
    padding: 0.3em;
    li {
      all: unset;
      display: block;
      width: 100%;
      padding: 0.1em 0;
      cursor: pointer;
    }
  }
`;
const defaultMapItemToValue = item => item.value || item.text || String(item);
// const defaultRenderSuggestion = item => (
//   <div>{defaultMapItemToValue(item)}</div>
// );
function defaultRenderSuggestion(suggestion, { query, isHighlighted }) {
  return (
    <div className={`suggestion ${isHighlighted && 'highlighted'}`}>
     { defaultMapItemToValue(suggestion) }
    </div>
  );
}
const defaultRenderInputComponent = props => <Input {...props} />;

const Autocomplete = ({
  key,
  placeholder,
  source,
  mapItemToValue = defaultMapItemToValue,
  renderSuggestion = defaultRenderSuggestion,
  shouldRenderSuggestions = () => true,
  renderInputComponent = defaultRenderInputComponent,
  ...props
}) => {
  const [value, setValue] = useState(mapItemToValue(props.value));
  const [filteredSource, setSource] = useState(source || []);

  useEffect(() => {
    setValue(mapItemToValue(props.value));
  }, [props.value]);

  useEffect(() => {
    setSource(source);
  }, [source.length]);

  return (
    <StyledAutocomplete key={key}>
      <Autosuggest
        suggestions={filteredSource}
        onSuggestionsFetchRequested={({ value }) => {
          setSource(
            source.filter(item =>
              JSON.stringify(item).match(new RegExp(value, 'i')),
            ),
          );
        }}
        onSuggestionSelected={(event, { suggestion }) => {
          props.onChange(suggestion);
        }}
        onSuggestionsClearRequested={() => setSource([])}
        getSuggestionValue={mapItemToValue}
        renderSuggestion={renderSuggestion}
        shouldRenderSuggestions={shouldRenderSuggestions}
        // renderInputComponent={renderInputComponent}
        inputProps={{
          placeholder: placeholder,
          value: value,
          onBlur: () => {
           if (typeof props.onBlur === 'function') {
             props.onBlur(value)
           } else {
             setValue(mapItemToValue(props.value));
           }
          },
          onKeyUp: (event) => {

             if (event.keyCode === 13) {
              typeof props.onEnter === 'function' && props.onEnter(value);
             }
          },
          onChange: (event, { newValue }) => {

            setValue(newValue);
          },
        }}
        highlightFirstSuggestion
        alwaysRenderSuggestions={false}
        {...props}
      />
    </StyledAutocomplete>
  );
};

export default Autocomplete;
