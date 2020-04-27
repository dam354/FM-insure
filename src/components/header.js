import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import Logo from '../data/logo.svg';
import SideBar from './sidebar';

/* font-family: 'Karla', sans-serif;
  font-family: 'DM Serif Display', serif; */
const Head = styled.header`
  height: 5rem;
  top: 0;
  ${tw` bg-white flex  w-full  fixed   z-50`};
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
  ${tw`bg-grey-lightest`};
`;

const InnerHeader = styled.div`
  height: 5rem;
  ${tw`flex  items-center justify-between `};

  @media (max-width: 768px) {
  }
`;
const Navigation = styled.nav`
  ${tw`flex  items-center justify-between `};
`;

const NavContainer = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Karla', sans-serif;
  color: hsl(273, 4%, 51%);

  ${tw`mr-8  no-underline uppercase text-sm font-semibold text-xs`};
`;
const Button = styled.button`
  font-family: 'Karla', sans-serif;
  border: 2px solid hsl(270, 9%, 17%);
  position: relative;
  transition: 0.08s ease-in;
  -o-transition: 0.08s ease-in;
  -ms-transition: 0.08s ease-in;
  -moz-transition: 0.08s ease-in;
  -webkit-transition: 0.08s ease-in;
  background: none;
  width: 150px;
  z-index: 1;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    background: hsl(256, 26%, 20%);
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    -webkit-transition: top 0.09s ease-in;
  }
  &:hover {
    color: white;
  }
  &:hover::before {
    top: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }

  ${tw`uppercase  py-2 px-3`};
`;
const SideBarContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Header = () => {
  return (
    <Head id="header">
      <Container>
        <InnerHeader>
          <div className="logo">
            <img src={Logo} alt="Insure" />
          </div>
          <Navigation>
            <NavContainer>
              <NavLink activeStyle={{ color: 'hsl(270, 9%, 17%)' }} to="/about">
                How we work
              </NavLink>
              <NavLink activeStyle={{ color: 'hsl(270, 9%, 17%)' }} to="/work">
                Blog
              </NavLink>
              <NavLink
                activeStyle={{ color: 'hsl(270, 9%, 17%)' }}
                to="/contact"
              >
                Account
              </NavLink>
            </NavContainer>

            <Button type="button"> View plans</Button>
            <SideBarContainer>
              <SideBar />
            </SideBarContainer>
          </Navigation>
        </InnerHeader>
      </Container>
    </Head>
  );
};

export default Header;
