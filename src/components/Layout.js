import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../assets/sass/main.scss';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isPreloaded, setIsPreloaded] = useState(true);

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
