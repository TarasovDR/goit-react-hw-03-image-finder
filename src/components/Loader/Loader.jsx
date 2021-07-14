import React, { Component } from 'react'
import Spinner from "react-loader-spinner";
import { SpinnerContainer } from './Loader.styled';

export default class Loader extends Component {
  render() {
    return (
      <SpinnerContainer>
        <Spinner
          type="Circles"
          color="#3f51b5"
          height={100}
          width={100}
          timeout={3000}
        />
      </SpinnerContainer>
    );
  }
}