import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isPreloaded, setIsPreloaded] = useState(true);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPreloaded(false);
    }, 100);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content:
              'Family Medicine & Sports Medicine Physician in Encinitas and San Diego CA',
          },
          {
            name: 'keywords',
            content:
              'doctor, san diego, encinitas, family medicine, sports medicine, primary care',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
        <div id="wrapper">
          <Sidebar />

          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
