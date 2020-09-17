import React from 'react';
import config from '../../config';
import Layout from '../components/Layout';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import hero from '../assets/images/hero.jpg';
import bgsports from '../assets/images/bg-sports.jpg';
import family1 from '../assets/images/family-1.jpg';
// import family2 from '../assets/images/family-2.jpg';
import sports1 from '../assets/images/sports-1.jpg';
import sports2 from '../assets/images/sports-2.jpg';
import sports3 from '../assets/images/sports-3.jpg';
import sports4 from '../assets/images/sports-4.jpg';
import rebecca from '../assets/images/rebecca.jpg';
import logo1 from '../assets/images/logo-1.png';
import logo2 from '../assets/images/logo-2.png';
import logo3 from '../assets/images/logo-3.png';
import logo4 from '../assets/images/logo-4.png';
import logo5 from '../assets/images/logo-5.png';
import { Link } from 'gatsby';

// import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="inner">
        <div className="hero-headlines">
          <span>Customized Care </span>
          <span>for Your Performance &amp; Health </span>
          <p>
            Doctor Becca Rodriguez Regner provides customized, complete and
            quality care for her patients and athletes.
          </p>
          <AnchorLink to="#About" title="About">
            <button className="button">Learn More</button>
          </AnchorLink>
        </div>
      </div>
      <img src={hero} alt="Hero" />
    </div>

    <div id="main">
      <div className="inner">
        <section id="About">
          <h2>Meet Doctor {config.siteTitle}</h2>
          <p>
            <span className="image right">
              <img src={rebecca} alt="{config.siteTitle}" />
            </span>
          </p>
          <p>
            Dr. Rebeccah Rodriguez Regner, know by her shorter as Becca,
            graduated from KCOM and is board certified in Family Medicine and
            Sports Medicine. Dr. Rodriguez serves the USOPC as a Team USA
            physician and was on the medical staff at the Olympic Training Site
            in Chula Vista, CA as team physician for 10 years.
          </p>
          <p>
            She is honored to currently serve on the USOPC Physician Advisory
            Board. Dr. Rodriguez served as the Medical Director for the high
            performance center for Team USA (11 sports) at the 2016 Olympics in
            Rio. She Was part of the medical staff as Team USA physician at the
            2019 Pan American Games in Lima. Peru.
          </p>
          <blockquote>
            Dr. Rodriguez is the team physician for USA Women's Waterpolo and
            USA Rugby. She is also the head team physician for the major league
            rugby team, the San Diego Legion.
          </blockquote>
          <p>
            Dr. Rodriguez is passionate about improving quality healthcare and
            helps make policy for national organizations such as: the AOASM as
            Vice President, ACOFP California Board, ACOFP Health and Wellness
            and Procedural Committee, and the President’s Council for Sports,
            Fitness and Nutrition. Currently, Dr. Rodriguez is in private
            practice at Oasis MD and is a fellow of both the ACOFP and AOASM.
            She travels the world with Team USA, loves to be active with sports
            and spend time with her husband and son.
          </p>
          <h3 className="center-title">Official Team Physician</h3>
          <div className="box alt">
            <div className="team-logos">
              <div className="col-2">
                <span className="image fit">
                  <img src={logo5} alt="team physciains logo 1" />
                </span>
              </div>

              <div className="col-2">
                <span className="image fit">
                  <img src={logo3} alt="team physciains logo 2" />
                </span>
              </div>
              <div className="col-2">
                <span className="image fit">
                  <img src={logo4} alt="team physciains logo 3" />
                </span>
              </div>
              <div className="col-2">
                <span className="image fit">
                  <img src={logo1} alt="team physciains logo 4" />
                </span>
              </div>
              <div className="col-2">
                <span className="image fit">
                  <img src={logo2} alt="team physciains logo 5" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <div id="FamilyMedicine">
          <h2>Family Medicine</h2>
          <p>
            <span className="image left">
              <img src={family1} alt="{config.siteTitle}" />
            </span>
          </p>

          <p>
            Dr. Rodriguez is a Primary Care Physician that provides
            comprehensive quality healthcare for the entire family. Dr.
            Rodriguez takes care of all ages from newborns to the elderly
            population and completes minor procedures in the office. Her
            residency education and training in family medicine allows her to
            take care of simple to complex medical problems while knowing when
            to refer to the specialist. Dr. Rodriguez also feels preventive
            health is key to a person’s lifespan and healthspan. She enjoys
            educating patients in prevention of disease to help all live life to
            the fullest.
          </p>

          <p>
            She completes general physicals, well woman exams, well male exams
            and sports physicals. Dr. Rodriguez serves as the “quarterback” for
            your medical home team and helps to facilitate referrals while
            communicating about quality care for her patients. Her unique
            training includes osteopathic manipulative treatment that aids in
            diagnosis and treatment of many medical problems. Dr. Rodriguez is a
            highly skilled physician using the most updated science to help make
            medical decisions while forming life-long relationships with the
            family. Dr. Rodriguez embodies her Osteopathic medical training in
            treating the whole person's mind, body and spirit.
          </p>
          <AnchorLink to="#RequestAppointment" title="Request Appointment">
            <button className="button icon fa-calendar-alt">
              Request Appointment
            </button>
          </AnchorLink>
        </div>
      </div>
    </div>

    <div className="callout">
      <div className="inner">
        <p>
          Dr. Rodriguez was named as one of the “Top Doctors” in the annual San
          Diego Magazine “Physicians of Exceptional Excellence” survey multiple
          years.
        </p>
      </div>
      <img src={bgsports} alt="Hero" />
    </div>
    <div className="main">
      <div className="inner">
        <section id="SportsMedicine">
          <h2>Sports Medicine</h2>
          {/* <p>
            <span className="image right">
              <img src={sports1} alt="{config.siteTitle}" />
            </span>
          </p> */}
          <p>
            Dr. Rodriguez is also a specialist in sports medicine. She completed
            a fellowship in primary care sports medicine and takes care of
            pediatric and adult athletes from amateur to elite/professional and
            Olympic levels. Her extensive training and clinical experience has
            allowed her to effectively treat musculoskeletal injuries, assess
            sports nutrition needs, provide counsel on essential vitamins and
            supplements, and work with teams on sports performance programs. She
            is trained in musculoskeletal ultrasound and implements the most up
            to date technology in office to her patients.
          </p>
          <br clear="all"></br>

          <div className="box alt">
            <div className="row gtr-uniform">
              <div className="col-3">
                <span className="image fit">
                  <img src={sports1} alt="sport medicine teams" />
                </span>
              </div>
              <div className="col-3">
                <span className="image fit">
                  <img src={sports2} alt="sport medicine teams" />
                </span>
              </div>
              <div className="col-3">
                <span className="image fit">
                  <img src={sports3} alt="sport medicine teams" />
                </span>
              </div>
              <div className="col-3">
                <span className="image fit">
                  <img src={sports4} alt="sport medicine teams" />
                </span>
              </div>
            </div>
          </div>
          <h3 className="center-title">Organization Memberships</h3>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>American Osteopathic Association</td>
                  <td>Member 2006 - Present</td>
                </tr>
                <tr>
                  <td>American Osteopathic Association of Sports Medicine</td>
                  <td>Member 2009 - Present, Vice President </td>
                </tr>
                <tr>
                  <td>American College of Osteopathic Family Physicians</td>
                  <td>
                    Member 2006 - Present, National Procedural Committee Member.
                  </td>
                </tr>
                <tr>
                  <td>
                    American College of Osteopathic Family Physicians California
                    State Society
                  </td>
                  <td> Member 2009 - Present, Board Member</td>
                </tr>
                <tr>
                  <td>Team USA Physician</td>
                  <td>
                    US Olympic And Paralympic Training Center Team Physician
                    2009-2020
                  </td>
                </tr>
                <tr>
                  <td>USA Women’s Waterpolo</td>
                  <td>Team Physician 2016 - Present </td>
                </tr>
                <tr>
                  <td>USA Rugby</td>
                  <td>Team Physician 2009 - Present </td>
                </tr>
                <tr>
                  <td>San Diego Legion</td>
                  <td>Team Physician 2009 - Present </td>
                </tr>
                <tr>
                  <td>San Diego Ballet</td>
                  <td>Company Physician 2009 - Present </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>
            <br></br>
            <br></br>Write a Review
          </h3>
          <p>
            Thank you for visiting my website. I hope it gives a small insight
            to my educational training, clinical experience, and passion to help
            people. If you are a current patient, I would greatly appreciate 30
            seconds of your time to write a review about your office experience!
          </p>
          <Link
            external="true"
            className="button"
            target="_blank"
            to="https://www.google.com/search?hl=en-US&gl=us&q=Dr.+Becca+Rodriguez+Regner,+499+N+El+Camino+Real+Suite+C+-200,+Encinitas,+CA+92024&ludocid=3082030671131112221&lsig=AB86z5UfD36msj8MLGLMv7kbUQ0W#lrd=0x80dc0b85607240bf:0x2ac59290eba0f31d,3"
          >
            Write A Review
          </Link>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
