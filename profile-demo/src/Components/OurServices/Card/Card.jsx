import React from 'react';
import styled from 'styled-components';

const Card = ({ cardNum, cardTitle, cardText, width = 410, height = 560 }) => {
  return (
    <StyledWrapper $width={width} $height={height}>
      <div className="card">
        <div className="card2">
          <div className="content">
            <div className="number">{cardNum}</div>
            <div className="title">{cardTitle}</div>
            <div className="description">
              <p>{cardText}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* CSS variables for dimensions */
  --card-width: ${props => props.$width}px;
  --card-height: ${props => props.$height}px;
  
  .card {
    width: var(--card-width);
    height: var(--card-height);
    background-image: linear-gradient(163deg,rgb(255, 178, 55) 0%,rgb(255, 75, 55) 100%);
    border-radius: 20px;
    transition: all 0.3s;
    position: relative;
    z-index: 1;
    // margin: 30px;
  }

  .card2 {
    width: var(--card-width);
    height: var(--card-height);
    background-color: #1a1a1a;
    border-radius: 15px;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
    
    /* 1px border */
    border: 1px solid rgba(255, 255, 255, 0.47);
    
    /* Ensure content stays within border */
    box-sizing: border-box;
    padding: 40px 35px;
  }

  .card2:hover {
    transform: scale(0.99);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(255, 119, 0, 0.3);
  }
  
  /* Subtle inner glow */
  .card2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    box-shadow: inset 0 0 8px rgba(227, 125, 42, 0.1);
    z-index: -1;
    transition: all 0.3s;
  }
  
  .card2:hover::before {
    box-shadow: inset 0 0 12px rgba(255, 140, 0, 0.2);
  }
  
  /* Card content styling */
  .content {
    color: white;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .number {
    font-size: 120px;
    font-weight: 700;
    line-height: 1;
    color: transparent;
    background: linear-gradient(90deg, #ff9137, #ff9137);
    -webkit-background-clip: text;
    background-clip: text;
    margin-bottom: 20px;
    letter-spacing: -4px;
  }
  
  .title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 15px;
  }
  
  .title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 3px;
    background: linear-gradient(90deg, #ff9137, #ff9137);
    border-radius: 2px;
  }
  
  .description {
    font-size: 18px;
    line-height: 1.6;
    color: #aaa;
    flex-grow: 1;
  }
  
  .description p {
    margin: 0;
  }
`;

export default Card;