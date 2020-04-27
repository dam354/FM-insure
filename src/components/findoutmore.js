import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import FindOutMoreDecDesk from '../data/bg-pattern-how-we-work-desktop.svg';

import FindOutMoreDecMobile from '../data/bg-pattern-how-we-work-mobile.svg';

const FindOutMoreSection = styled.section`
  background-color: #ffffff;
  margin-top: 100px;
  ${tw`w-full relative flex items-start `};
`;

const Container = styled.div`
  width: 1640px;
  min-width: 1640px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 1280px;
    min-width: 1280px;
  }
  @media (max-width: 1280px) {
    width: 976px;
    min-width: 976px;
  }
  @media (max-width: 976px) {
    width: 768px;
    min-width: 768px;
  }
  @media (max-width: 768px) {
    width: 80%;
    min-width: 80%;
  }
  ${tw``};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${tw`relative `};
`;

const MainText = styled.div`
  padding: 75px;
  background-color: hsl(256, 26%, 20%);
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
  flex-direction:column;
  padding: 25px;
  }
  & h2 {
    color: #ffffff;;
    font-family: 'DM Serif Display', serif;
    font-size: 3rem;
    line-height: 1;
    @media (max-width: 768px) {
      padding-bottom: 20px;
      text-align: center;
      z-index:3;
    }
  }

  &::after {
    content:'';
    background-image: url('${FindOutMoreDecDesk}');
    width: 100%;
    height: 100%;
    background-repeat:no-repeat;
    background-position:top right;
    position: absolute;
    top:0;
    right:0;
    z-index:2;
    overflow-x:hidden;


    @media (max-width: 768px) {
      background-image: url('${FindOutMoreDecMobile}');
    }
  }
  
`;

const Button = styled.button`
  font-family: 'Karla', sans-serif;
  border: 2px solid #ffffff;
  position: relative;
  transition: 0.08s ease-in;
  -o-transition: 0.08s ease-in;
  -ms-transition: 0.08s ease-in;
  -moz-transition: 0.08s ease-in;
  -webkit-transition: 0.08s ease-in;
  background: none;
  width: 160px;
  z-index: 3;
  overflow: hidden;
  color: #ffffff;
  &::before {
    content: '';
    position: absolute;
    background: #ffffff;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    -webkit-transition: top 0.09s ease-in;
  }
  &:hover {
    color: hsl(256, 26%, 20%);
  }
  &:hover::before {
    top: 0;
  }
  ${tw`  py-2 px-3 uppercase`};
`;

const FindOutMore = () => {
  return (
    <FindOutMoreSection>
      <Container>
        <Row>
          <MainText>
            <h2>
              Find out more
              <br /> about how we work
            </h2>

            <Button>How we work </Button>
          </MainText>
        </Row>
      </Container>
    </FindOutMoreSection>
  );
};

export default FindOutMore;
