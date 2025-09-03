import React from 'react';
import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <StyledWrapper>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">Blink Path</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: 2.2075rem; /* 15% larger */
    font-family: inherit;
  }

  button.learn-more {
    width: 15.18rem; /* 15% larger */
    height: auto;
    // display: flex;
    // gap: 50px;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3.795rem; /* 15% larger */
    height: 3.795rem; /* 15% larger */
    background: #282936;
    border-radius: 2.07rem; /* 15% larger */
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.790625rem; /* 15% larger */
    width: 1.423125rem; /* 15% larger */
    height: 0.158125rem; /* 15% larger */
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.36685rem; /* 15% larger */
    right: 0.0790625rem; /* 15% larger */
    width: 0.790625rem; /* 15% larger */
    height: 0.790625rem; /* 15% larger */
    border-top: 0.158125rem solid #fff; /* 15% larger */
    border-right: 0.158125rem solid #fff; /* 15% larger */
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: -13px;
    left: 10px;
    right: 0;
    bottom: 0;
    padding: 0.94875rem 0; /* 15% larger */
    margin: 0 0 0 2.34025rem; /* 15% larger */
    color: #282936;
    font-weight: 500;
    line-height: 1.6;
    text-align: center;
    /* Removed text-transform: uppercase */
    // display: flex;
    
  }

  button:hover .circle {
    width: 100%;
  }

  button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1.265rem, 0); /* 15% larger */
  }

  button:hover .button-text {
    color: #fff;
  }
`;

export default HeaderLogo;