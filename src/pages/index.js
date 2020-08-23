import React from 'react';
import config from '../../config';

import Layout from '../components/Layout';

import hero from '../assets/images/hero.jpg';
import rebecca from '../assets/images/rebecca.jpg';

// import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="inner">
        <div className="hero-headlines">
          <span>Customized Care for Your </span>
          <span>Performance &amp; Health </span>
        </div>
      </div>
      <img src={hero} alt="Hero" />
    </div>
    <div id="main">
      <div className="inner">
        <h1 id="About">Meet {config.siteTitle}</h1>
        <p>
          <span className="image right">
            <img src={rebecca} alt="{config.siteTitle}" />
          </span>
        </p>
        <blockquote>
          Dr. Rebecca Rodriguez was named as one of the “Top Doctors” in the
          annual San Diego Magazine “Physicians of Exceptional Excellence”
          survey multiple years.
        </blockquote>
        <p>
          Dr. Rodriguez received her medical degree at the Kirksville College of
          Osteopathic Medicine, and she served her Family Medicine residency in
          Phoenix, Arizona. She completed her Sports Medicine fellowship at the
          San Diego Sports Medicine &amp; Family Health Center. Dr. Rodriguez is
          the company physician for the San Diego Ballet, The Academy of
          Performing Arts of San Diego and The San Diego Symphony.
        </p>
        <h2>{config.siteDescription}</h2>
        <p>
          She participates in team coverage for San Diego State University
          Athletics, the USA Olympic Training Center, and OMBAC Rugby Team. Dr.
          Rodriguez is board certified in Family Medicine with a Certificate of
          Added Qualifications in Sports Medicine (CAQSM), and specializes in
          Dance Medicine.
        </p>
        <p>
          Dr. Rodriguez is currently welcoming new patients. Please fill out the
          contact form to requeset an appointment today.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
