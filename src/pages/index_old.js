import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            Family Doctor & Sports Medicine
            <br />
          </h1>
          <p>
            Dr. Rebecca Rodriguez was named as one of the “Top Doctors” in the
            annual San Diego Magazine “Physicians of Exceptional Excellence”
            survey multiple years. She is currently welcoming new patients. Dr.
            Rodriguez received her medical degree at the Kirksville College of
            Osteopathic Medicine, and she served her Family Medicine residency
            in Phoenix, Arizona. She completed her Sports Medicine fellowship at
            the San Diego Sports Medicine &amp; Family Health Center. Dr.
            Rodriguez is the company physician for the San Diego Ballet, The
            Academy of Performing Arts of San Diego and The San Diego Symphony.
            She participates in team coverage for San Diego State University
            Athletics, the USA Olympic Training Center, and OMBAC Rugby Team.
            Dr. Rodriguez is board certified in Family Medicine with a
            Certificate of Added Qualifications in Sports Medicine (CAQSM), and
            specializes in Dance Medicine.
          </p>
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Magna</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Lorem</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Feugiat</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Tempus</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Aliquam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Veroeros</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Ipsum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Dolor</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style1">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Nullam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Ultricies</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Dictum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Pretium</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
