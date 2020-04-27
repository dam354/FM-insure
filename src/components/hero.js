import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import DesktopDecTop from '../data/bg-pattern-intro-right-desktop.svg';
import DesktopDecBot from '../data/bg-pattern-intro-left-desktop.svg';
import MobileDecBot from '../data/bg-pattern-intro-right-mobile.svg';
import MobileDecTop from '../data/bg-pattern-intro-left-mobile.svg';

const HeroSection = styled.section`
  background-color: hsl(256, 26%, 20%);
  height: 600px;
  margin-top: 5rem;
  @media all and (max-width: 976px) {
    height: 500px;
  }
  @media (max-width: 768px) {

height:auto;
}

  &::before {
    content:'';
    background-image: url('${DesktopDecTop}');
    width: 100%;
    height: 100%;
    background-repeat:no-repeat;
    background-position:top right;
    position: absolute;
    top:0;
    right:0;
    z-index:2;
    overflow-x:hidden;
    @media all and (max-width: 1400px) { 
      background-position: 105% 0%;
     }

    @media all and (max-width: 1175px) {      
      background-position: 115% 0%;
    }
    @media (max-width: 768px) {

background-image: none;
}
  }
  &::after{
    content:'';
    background-image: url('${DesktopDecBot}');
    width: 100%;
    height: 100%;
    background-repeat:no-repeat;
    background-position:bottom left;
    transform:translateY(50%) translateX(-70px);

    position: absolute;
    bottom:0;
    left:0;
    z-index:2;
    @media all and (max-width: 1400px) {
      left:-5%;
    }
    @media all and (max-width: 1175px) {  background-position: -10% 0%;;}
    @media all and (max-width: 1110px) {   transform:translateY(55%); }

    @media (max-width: 768px) {

  background-image: none;
  }
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
    width: 100%;
    min-width: 100%;
  }
  ${tw``};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  ${tw`relative `};
`;

const Divider = styled.div`
  height: 1px;
  width: 150px;
  background-color: #ffffff;
  @media (max-width: 768px) {
    display: none !important;
  }
`;
const MainText = styled.div`
  z-index: 3;
  margin-top: 105px;
  margin-right: 35px;
  max-width: 940px;





  @media all and (max-width: 976px) {
    margin-top: 50px;
    max-width: 530px;
  }
  @media all and (max-width: 768px) {
margin-top: 0;
    max-width: 100%;
    width: 100%;
    position:relative;
    padding: 50px 10%;
    & > * {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }


    &::before {
    content:'';
    background-image: url('${MobileDecTop}');
    width: 100%;
    height: 100%;
    background-repeat:no-repeat;
    background-position:top left;
    position: absolute;
    top:0;
    left:0;
    z-index:-2;
    overflow-x:hidden;
    }
    

    &::after{
    content:'';
    background-image: url('${MobileDecBot}');
    width: 100%;
    height: 100%;
    background-repeat:no-repeat;
    background-position:bottom right;
    transform:translateY(50%) ;

    position: absolute;
    bottom:0;
    right:0;
    z-index:-2;
    }





  }

  & h1 {
    margin-top: 70px;
    color: #ffffff;
    font-family: 'DM Serif Display', serif;
    font-size: 4rem;
    line-height: 1;
    z-index:5;
    @media all and (max-width: 976px) {
      font-size: 3rem;
      margin-top: 35px;
  
    }
    @media (max-width: 768px) {
      margin-top: 0;
    }
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }
  & p {
    font-size: 16px;
    line-height: 2;
    font-family: 'Karla', sans-serif;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 20px;
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

  z-index: 1;
  overflow: hidden;
  color: #ffffff;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
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

const MainImg = styled.div`
  z-index: 1;
  margin-top: 105px;
  max-width: 540px;
  width: 100%;

  @media all and (max-width: 976px) {
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin-top: 0;
  }
`;
/* font-family: 'Karla', sans-serif;
  font-family: 'DM Serif Display', serif; */

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "image-intro-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeroSection>
      <Container>
        <Row>
          <MainText>
            <Divider />
            <h1>Humanizing your&nbsp;insurance.</h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <Button>View plans</Button>
          </MainText>

          <MainImg>
            <Img fluid={data.hero.childImageSharp.fluid} />
          </MainImg>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default Hero;
