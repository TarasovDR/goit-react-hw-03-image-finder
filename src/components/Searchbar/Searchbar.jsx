import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';


export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === ""){
      toast.warn('no request - no picture=)', {
        position: "top-right",
        autoClose: 3000,
        });
      return;
    }
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