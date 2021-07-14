import React, { Component } from 'react';

import { SearchHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';


export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ searchQuery: value });
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return(
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
            Search
            </SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput 
            autocomplete="off"
            autoFocus
            onChange={this.handleChange}
            placeholder="Search images and photos"
            type="text"
            value={this.state.searchQuery}/>
        </SearchForm>
      </SearchHeader>
    )
  }
}