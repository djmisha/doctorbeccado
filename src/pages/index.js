import React from 'react';
import config from '../../config';
import Layout from '../components/Layout';

import hero from '../assets/images/hero.jpg';
import bgsports from '../assets/images/bg-sports.jpg';
import family1 from '../assets/images/family-1.jpg';
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
import joshua from '../assets/images/joshua.jpg';
import chelsea from '../assets/images/chelsea.jpg';
import jimmy from '../assets/images/jimmy.jpg';

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="inner">
        <div className="hero-headlines">
          <span>Customized Care </span>
          <span>for Your Performance &amp; Health </span>
          <p>
            Doctor Rebeccah Rodriguez Regner provides customized, complete and
            quality care for her patients and athletes.
          </p>
          <a href="#About">
            <button className="button">Learn More</button>
          </a>
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
            Dr. Rebeccah Rodriguez Regner, also know by her nickname as Becca,
            graduated from KCOM and is board certified in Family Medicine and
            Sports Medicine. Dr. Rodriguez serves the USOPC as a Team USA
            physician and was on the medical staff at the Olympic Training Site
            in Chula Vista, CA as team physician for 10 years.
          </p>
          <p>
            She is honored to currently serve on the USOPC Physician Advisory
            Board. Dr. Rodriguez served as the Medical Director for the high
            performance center for Team USA (11 sports) at the 2016 Olympics in
            Rio. She was part of the medical staff as Team USA physician at the
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
          <a href="#RequestAppointment">
            <button className="button icon fa-calendar-alt">
              Request Appointment
            </button>
          </a>
          <h3 className="center-title">Services</h3>
          <div className="table-wrapper">
            <div className="table-flex">
              <div>General Physical Male and Female</div>
              <div>Well Woman Exam</div>
            </div>
            <div className="table-flex">
              <div>Cryotherapy</div>
              <div>Well Child Exams</div>
            </div>
            <div className="table-flex">
              <div>Sutures and Minor skin procedures</div>
              <div>Skin care</div>
            </div>
            <div className="table-flex">
              <div>Treatment of general medical conditions</div>
              <div>Weight Management</div>
            </div>
            <div className="table-flex">
              <div>Dietary Consultation</div>
              <div>Coordination of care with specialists</div>
            </div>
            <div className="table-flex">
              <div>Osteopathic Manipulative Treatment</div>
              <div>Sports Physicals</div>
            </div>
            <div className="table-flex">
              <div>Sports Injury</div>
              <div>MSK Ultrasound Guided injections</div>
            </div>
            <div className="table-flex">
              <div>Concussion Evaluation and Treatment</div>
              <div>Plasma Rich Protein Injections</div>
            </div>
            <div className="table-flex">
              <div>Orthobiologic Injections to come</div>
              <div>Basic Fracture Care</div>
            </div>
            <div className="table-flex">
              <div>Cupping, kinesio tape and bracing</div>
              <div>Sports Nutrition</div>
            </div>
            <div className="table-flex">
              <div>Exercise program development</div>
              <div>Preventive musculoskeletal health</div>
            </div>
            <div className="table-flex">
              <div>Body mechanics and mobility assessment</div>
              <div>Imaging Services (Xray and MRI, MSK US)</div>
            </div>
          </div>
          <h3>
            <br></br>
            <br></br>Review your experience
          </h3>
          <p>
            <span className="please-review">
              <i className="fa fa-thumbs-up" />
            </span>
          </p>
          <p>
            Thank you for visiting my website. I hope it gives a small insight
            to my educational training, clinical experience, and passion to help
            people. If you are a current patient, I would greatly appreciate 30
            seconds of your time to write a review about your office experience!
          </p>
          <a
            rel="noreferrer noopener"
            title="Write a Review"
            external="true"
            className="button"
            target="_blank"
            href="https://www.google.com/search?hl=en-US&gl=us&q=Dr.+Becca+Rodriguez+Regner,+499+N+El+Camino+Real+Suite+C+-200,+Encinitas,+CA+92024&ludocid=3082030671131112221&lsig=AB86z5UfD36msj8MLGLMv7kbUQ0W#lrd=0x80dc0b85607240bf:0x2ac59290eba0f31d,3"
          >
            Write A Review
          </a>
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
            <div className="table-flex">
              <div>American Osteopathic Association</div>
              <div>Member 2006 - Present</div>
            </div>
            <div className="table-flex">
              <div>American Osteopathic Association of Sports Medicine</div>
              <div>Member 2009 - Present, Vice President </div>
            </div>
            <div className="table-flex">
              <div>American College of Osteopathic Family Physicians</div>
              <div>
                Member 2006 - Present, National Procedural Committee Member.
              </div>
            </div>
            <div className="table-flex">
              <div>
                American College of Osteopathic Family Physicians California
                State Society
              </div>
              <div> Member 2009 - Present, Board Member</div>
            </div>
            <div className="table-flex">
              <div>Team USA Physician</div>
              <div>
                US Olympic And Paralympic Training Center Team Physician
                2009-2020
              </div>
            </div>
            <div className="table-flex">
              <div>USA Women’s Waterpolo</div>
              <div>Team Physician 2016 - Present </div>
            </div>
            <div className="table-flex">
              <div>USA Rugby</div>
              <div>Team Physician 2009 - Present </div>
            </div>
            <div className="table-flex">
              <div>San Diego Legion</div>
              <div>Team Physician 2009 - 2021 </div>
            </div>
            <div className="table-flex">
              <div>San Diego Ballet</div>
              <div>Company Physician 2009 - Present </div>
            </div>
          </div>
        </section>

        <section id="PhysicianAssistant">
          <h2>Certified Physician Assistant</h2>
          <h3>Meet Chelsea Ellingson</h3>
          <p>
            <span className="image right">
              <img src={chelsea} alt="Chelsea Ellingson" />
            </span>
          </p>
          <p>
            Chelsea Ellingson is a certified Physician Assistant who has
            recently joined the team. She achieved her Bachelor's in Science
            from UCSD and her Master's in Health Sciences from George Washington
            University. She has practiced as a Primary Care Provider in
            Encinitas and skilled in Sports Medicine, Women's Health, Mental
            Health, and other common acute and chronic conditions.
          </p>
          <p>
            Chelsea has always had a passion for treating athletes. She was a
            dancer through college, assisted motocross physicians in high
            school, worked as a physical therapy aide and assisted San Diego
            Sports Medicine in college, and completed an Orthopedic Trauma and
            Sports Medicine rotation during her PA program.
          </p>
          <p>
            PA Ellingson is dedicated to providing quality care and takes the
            time to listen to her patients. She strives to provide her patients
            with the education and motivation to prevent illness and practice a
            healthy lifestyle. When Chelsea isn't busy working, she enjoys San
            Diego's craft beer, running, traveling, and spending time with
            husband, dog, cat, friends and family.
          </p>
          <h3 className="center-title">Physician Assistant Services</h3>

          <div className="table-wrapper">
            <div className="table-flex">
              <div>General Physical Male and Female</div>
              <div>Well Woman Exam </div>
            </div>
            <div className="table-flex">
              <div>Contraception (Nexplanon, IUD insertions/ removals) </div>
              <div>Treatment of general medical conditions</div>
            </div>
            <div className="table-flex">
              <div>Coordination of care with specialists</div>
              <div>Sports Physicals</div>
            </div>
            <div className="table-flex">
              <div>Sports Injury</div>
              <div>MSK injections</div>
            </div>
            <div className="table-flex">
              <div>Basic Fracture Care </div>
              <div>Cryotherapy</div>
            </div>
            <div className="table-flex">
              <div>Sutures and Minor skin procedures</div>
              <div>Concussion Evaluation and Treatment</div>
            </div>
            <div className="table-flex">
              <div>Exercise program development</div>
              <div>Preventive musculoskeletal health</div>
            </div>
            <div className="table-flex">
              <div>Body mechanics and mobility assessment</div>
              <div>Imaging Services </div>
            </div>
            <div className="table-flex">
              <div>Plasma Rich Protein Injections to come</div>
              <div>Orthobiologic Injections to come</div>
            </div>
          </div>
        </section>
        <section id="AthleticTraining">
          <h2>Certified Athletic Trainer</h2>
          <h3>Meet Joshua Koeplin-Day</h3>
          <p>
            <span className="image right">
              <img src={joshua} alt="Joshua Koeplin-Day" />
            </span>
          </p>
          <p>
            Joshua Koeplin-Day is currently a Physician Extender and Athletic
            Trainer at Oasis MD Lifestyle Healthcare. He grew up in Sacramento
            and moved to San Diego in 2010, where he earned a B.S. in
            Kinesiology with an emphasis in Athletic Training as well as a M.A.
            in Kinesiology with an emphasis in Rehabilitation Science. His
            research on fitness trackers was published in the journal of PLOS
            One in 2016. He has been a certified Athletic Trainer for 10 years
            and was the Head Athletic Trainer at the University of Saint
            Katherine for 5 years.
          </p>
          <p>
            Additionally, he taught introductory and advanced athletic training
            courses as an adjunct professor for 5 years. Josh has worked with a
            variety of sports and sports organizations, including the X-Games,
            San Diego Ballet, and San Diego Legion (Major League Rugby).
          </p>
          <p>
            He is also involved in the San Diego community giving lectures,
            writing academic papers, designing medical covid protocols for local
            organizations, and supporting high school athletes with the San
            Diego Sports Medicine Foundation. In Josh’s spare time, he enjoys
            trying new foods and exploring new adventures with his lovely wife.
          </p>
          <h3 className="center-title">Athletic Trainer Services</h3>
          <div className="table-wrapper">
            <div className="table-flex">
              <div>Sports Rehabilitation</div>
              <div>Evaluation, care, and prevention of sports injuries</div>
            </div>
            <div className="table-flex">
              <div>
                Athletic Training for sports rehabilitation and return to play
              </div>
              <div>Concussion protocol</div>
            </div>
            <div className="table-flex">
              <div>Cupping Rehabilitation</div>
              <div>Evaluation of body mechanics </div>
            </div>
            <div className="table-flex">
              <div>Soft Tissue massage</div>
              <div>
                Proprioceptive Neuromuscular Facilitation (PNF) manipulation
              </div>
            </div>
          </div>
        </section>

        <section id="NursePractitioner">
          <h2>Family Nurse Practitioner</h2>
          <h3>Meet Jimmy Hao</h3>
          <p>
            <span className="image right">
              <img src={jimmy} alt="Jimmy Hao" />
            </span>
          </p>
          <p>
            Jimmy Hao is a certified Family Nurse Practitioner who achieved his
            Bachelor of Science in Nursing from University of San Francisco and
            his Master of Science in Nursing from Simmons University in Boston.
            Prior to nursing, he served in the US Marine Corps for six years as
            a HMMWV driver. As an RN, he worked for eight years at many
            prestigious hospitals around California, including the VA, Stanford,
            Kaiser, and Sharp; and has experience in the Psychiatric unit,
            Cardiac unit, ER, and post-surgical recovery. He is passionate about
            Family Medicine, Sports Medicine, Dermatology, Women's health and
            hormone health, Aesthetics, and Psychiatry. He most recently
            completed a Family and Sports medicine rotation and worked with a
            variety of different athletes including Olympic archers, X-Games
            motocross riders, Formula one drivers, cheerleaders, and San Diego
            ballet dancers. He has completed training in aesthetics, including
            Botox and Filler injections, and laser procedures, as well as
            Pellecome hormone pellet procedures.
          </p>
          <p>
            Jimmy focuses on providing the most up-to-date evidence-based care,
            increasing access and affordability to healthcare for all, and
            holistic medicine that focuses on the whole individual and their
            unique mental, physical, and spiritual needs throughout the
            lifespan. He is dedicated to being an advocate for you and your
            family by spending quality time and building a professional
            collaborative team of experts to help you reach your healthcare
            goals, whether that is to live longer, be stronger physically and
            mentally, or to feel and look your best.
          </p>
          <p>
            When Jimmy isn't working, he loves spending time with his wife and
            German Shepherd, traveling, eating delicious food, attending music
            festivals, and rock climbing.
          </p>
        </section>

        <section className="trust-bar">
          <div className="t-item">
            <i className="fa fa-television" />
            <span>Telemedicine Appointments</span>
            <p>See your doctor by video or phone</p>
          </div>
          <div className="t-item">
            <i className="fa fa-check-square-o" />
            <span>Office Safely Protocols</span>
            <p>Your saftey is our priority</p>
          </div>
          <div className="t-item">
            <i className="fa fa-star-o" />
            <span>Top Rated Doctor</span>
            <p>5 stars according to our patients</p>
          </div>
          <div className="t-item">
            <i className="fa fa-comment-o" />
            <span>Multilingual</span>
            <p>English, Spanish and Basic American Sign Language (ASL)</p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Rebeccah Rodriguez Regner, DO</title>
    <meta
      name="description"
      content="Family Medicine & Sports Medicine Physician in Encinitas and San Diego CA"
    />
    <meta
      name="keywords"
      content="doctor, san diego, encinitas, family medicine, sports medicine, primary care"
    />
  </>
);
