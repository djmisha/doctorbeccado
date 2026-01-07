import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header className="major">
          <h2>NOT FOUND</h2>
        </header>
        <section>
          <h4>Not a valid URL</h4>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Not Found | Rebeccah Rodriguez Regner, DO</title>
    <meta
      name="description"
      content="Family Medicine & Sports Medicine Physician in Encinitas and San Diego CA"
    />
  </>
);
