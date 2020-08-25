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
        <p>
          Dr. Rebeccah Rodriguez Regner graduated from KCOM and is board
          certified in Family Medicine and Sports Medicine. Dr. Rodriguez serves
          the USOPC as a Team USA physician and was on the medical staff at the
          Olympic Training Site in Chula Vista, CA as team physician for 10
          years.
        </p>
        <blockquote>
          Dr. Rebecca Rodriguez was named as one of the “Top Doctors” in the
          annual San Diego Magazine “Physicians of Exceptional Excellence”
          survey multiple years.
        </blockquote>
        <p>
          She is honored to currently serve on the USOPC Physician Advisory
          Board. Dr. Rodriguez served as the Medical Director for the high
          performance center for Team USA (11 sports) at the 2016 Olympics in
          Rio. She Was part of the medical staff as Team USA physician at the
          2019 Pan American Games in Lima. Peru.
        </p>
        <p>
          Dr. Rodriguez is also a team physician for USA Womens Waterpolo and
          USA Rugby. She is the head team physician for the major league rugby
          team, the San Diego Legion.
        </p>
        <h2>{config.siteDescription}</h2>
        <p>
          Dr. Rodriguez is passionate about improving quality healthcare and
          helps make policy for national organizations such as: the AOASM as
          Vice President, ACOFP California Board, ACOFP Health and Wellness and
          Procedural Committee, and the President’s Council for Sports, Fitness
          and Nutrition. Currently, Dr. Rodriguez is in private practice at
          Oasis MD and is a fellow of both the ACOFP and AOASM. She travels the
          world with Team USA, loves to be active with sports and spend time
          with her husband and son.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
