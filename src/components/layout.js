import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Content = styled.div`
  ${tw`px-32 py-8 font-sans`};
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
  ${tw`bg-grey-lightest`};
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}

        <Footer></Footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
