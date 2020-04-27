import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import FindOutMore from '../components/findoutmore';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      poppinShade: file(relativePath: { eq: "image-intro-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero />
      <About />
      <FindOutMore />
      {
        // <Img fluid={data.poppinShade.childImageSharp.fluid} />
        // How we work Blog Account View plans Humanizing your insurance. Get your
        //   life insurance coverage easier and faster. We blend our expertise and
        //   technology to help you find the plan that’s right for you. Ensure you and
        //   your loved ones are protected. View plans We’re different Snappy Process
        //   Our application process can be completed in minutes, not hours. Don’t get
        //   stuck filling in tedious forms. Affordable Prices We don’t want you
        //   worrying about high monthly costs. Our prices may be low, but we still
        //   offer the best coverage possible. People First Our plans aren’t full of
        //   conditions and clauses to prevent payouts. We make sure you’re covered
        //   when you need it.
        // Our company How we
        //       work Why Insure?
        //       View plans
        // Reviews Help me FAQ Terms of use
        //   Privacy policy Cookies Contact Sales Support Live chat Others Careers
        //   Press Licenses
      }
    </Layout>
  );
};

export default IndexPage;
