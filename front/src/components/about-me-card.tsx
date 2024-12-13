
"use client"

import React from 'react';
import styled from 'styled-components';
import MotionTransition from './transition-component';

const AboutMeCard = () => {
  return (

    <MotionTransition position='bottom'>
    <StyledWrapper>
      <div className="card">
        <div className="img" />
        <span>About Me</span>
        <p className="info">I’m Fede, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
        <div className="share">
        </div>
        <button>resume</button>
      </div>
    </StyledWrapper>
    </MotionTransition>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 17em;
    height: 22.5em;
    background: #171717;
    transition: 1s ease-in-out;
    clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  .card span {
    font-weight: bold;
    color: white;
    text-align: center;
    display: block;
    font-size: 1em;
  }

  .card .info {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    font-size: 0.72em;
    margin: 1em;
  }

  .card .img {
    width: 4.8em;
    height: 4.8em;
    background: white;
    border-radius: 15px;
    margin: auto;
  }

  .card .share {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  .card a {
    color: white;
    transition: .4s ease-in-out;
  }

  .card a:hover {
    color: red;
  }

  .card button {
    padding: 0.8em 1.7em;
    display: block;
    margin: auto;
    border-radius: 25px;
    border: none;
    font-weight: bold;
    background: #ffffff;
    color: rgb(0, 0, 0);
    transition: .4s ease-in-out;
  }

  .card button:hover {
    background: red;
    color: white;
    cursor: pointer;
  }
`;

export default AboutMeCard;
