import React from 'react';
import config from '../../config';

import Layout from '../components/Layout';

// import pic1 from '../assets/images/01.jpg';
// import pic2 from '../assets/images/02.jpg';
// import pic3 from '../assets/images/03.jpg';
// import pic4 from '../assets/images/04.jpg';
// import pic5 from '../assets/images/05.jpg';
// import pic6 from '../assets/images/06.jpg';

// import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>{config.siteDescription}</h1>
          <p>
            Dr. Rebecca Rodriguez was named as one of the “Top Doctors” in the
            annual San Diego Magazine “Physicians of Exceptional Excellence”
            survey multiple years. She is currently welcoming new patients.
          </p>
          <p>
            Dr. Rodriguez received her medical degree at the Kirksville College
            of Osteopathic Medicine, and she served her Family Medicine
            residency in Phoenix, Arizona. She completed her Sports Medicine
            fellowship at the San Diego Sports Medicine &amp; Family Health
            Center. Dr. Rodriguez is the company physician for the San Diego
            Ballet, The Academy of Performing Arts of San Diego and The San
            Diego Symphony.
          </p>
          <p>
            She participates in team coverage for San Diego State University
            Athletics, the USA Olympic Training Center, and OMBAC Rugby Team.
            Dr. Rodriguez is board certified in Family Medicine with a
            Certificate of Added Qualifications in Sports Medicine (CAQSM), and
            specializes in Dance Medicine.
          </p>
        </header>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
