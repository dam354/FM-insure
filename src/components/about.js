import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import SnappyProcess from '../data/icon-snappy-process.svg';
import AffordablePrices from '../data/icon-affordable-prices.svg';
import PeopleFirst from '../data/icon-people-first.svg';

const AboutSection = styled.section`
  background-color: #ffffff;
  margin-top: 200px;

  @media (max-width: 768px) {
    margin-top: 25px;
  }

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
const Divider = styled.div`
  height: 1px;
  width: 150px;
  background-color: hsl(256, 26%, 20%);
  @media (max-width: 768px) {
    display: none !important;
  }
`;
const MainText = styled.div`
  z-index: 3;
  width: 100%;
  & h1 {
    margin-top: 70px;
    color: hsl(256, 26%, 20%);
    font-family: 'DM Serif Display', serif;
    font-size: 4rem;
    line-height: 1;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 0;
  }

  ${tw` `};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;

  @media (max-width: 768px) {
    width: 320px;
    text-align: center;
    justify-content: center;

    align-items: center;
    padding-right: 0;
  }
  & img {
    width: 86px;
    height: 86px;

    @media (max-width: 768px) {
      margin-top: 50px;
    }
  }

  & h3 {
    color: hsl(256, 26%, 20%);
    font-family: 'DM Serif Display', serif;
    font-size: 1.5rem;
    line-height: 1;
    margin-top: 50px;
    @media (max-width: 768px) {
      margin-top: 25px;
    }
  }

  & p {
    font-size: 16px;
    line-height: 1.5;
    font-family: 'Karla', sans-serif;
    color: hsl(273, 4%, 51%);
    margin-top: 30px;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Row>
          <MainText>
            <Divider />
            <h1>We’re different </h1>
            <CardContainer>
              <Card>
                <img src={SnappyProcess} alt="" />
                <h3>Snappy Process</h3>
                <p>
                  Our application process can be completed in minutes, not
                  hours. Don’t get stuck filling in tedious forms.
                </p>
              </Card>

              <Card>
                <img src={AffordablePrices} alt="" />
                <h3>Affordable Prices</h3>
                <p>
                  We don’t want you worrying about high monthly costs. Our
                  prices may be low, but we still offer the best coverage
                  possible.
                </p>
              </Card>

              <Card>
                <img src={PeopleFirst} alt="" />
                <h3>People First</h3>
                <p>
                  Our plans aren’t full of conditions and clauses to prevent
                  payouts. We make sure you’re covered when you need it.
                </p>
              </Card>
            </CardContainer>
          </MainText>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
