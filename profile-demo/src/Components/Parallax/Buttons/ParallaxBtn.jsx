import React from 'react';
import styled from 'styled-components';

const ParallaxBtn = (props) => {
  return (
    <StyledWrapper>
      <button>
        {props.name}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`


button {
    color: black;
    text-decoration: none;
    font-size: 16px;
    border: none;
    background: none;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin: 0 20px;
  }

  button::before {
    margin-left: auto;
  }

  button::after, button::before {
    content: '';
    width: 0%;
    height: 2px;
    background: #f44336;
    display: block;
    transition: 0.5s;
  }

  button:hover::after, button:hover::before {
    width: 100%;
  }`;

export default ParallaxBtn;
