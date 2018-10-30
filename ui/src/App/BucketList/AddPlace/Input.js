import React from 'react';
import { Query } from 'react-apollo';

import runSearchQuery from '../../../graphql/runSearchQuery';
import Autocomplete from './Autocomplete';

const Input = class extends React.Component {
  state = { inputValue: '' };

  handleOnChange = event => {
    console.log('handleOnChange: ' + event.target.value);
    this.setState({ inputValue: event.target.value });
  };

  handleOnSelect = (value, item) => {
    console.log('handleOnSelect: ' + item.formattedAddress);
    this.props.addPlace(item.formattedAddress);
    this.setState({ inputValue: '' });
  };

  render() {
    console.log('render called with input value: ' + this.state.inputValue);
    return (
      <Query
        query={runSearchQuery}
        variables={{ search: this.state.inputValue }}
      >
        {({ data }) => {
          const { locationSuggestion } = data;

          return (
            <Autocomplete
              suggestion={locationSuggestion}
              value={this.state.inputValue}
              onChange={this.handleOnChange}
              onSelect={this.handleOnSelect}
            />
          );
        }}
      </Query>
    );
  }
};

export default Input;
