import React from 'react' 
import About from './About';
import './App.scss';
import Experience from './Experience';
import Projects from './Projects';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="App">

      <section id="home" className="home">
        <img className="background-img" src={require("./images/sarah.jpg")} height="786" align="left"/>

        <div className="container">
          <nav className="header">
            <ul>
              <li><Link activeClass="selected" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
              <li><Link activeClass="selected" to="experience" spy={true} smooth={true} duration={500}>Work Experience</Link></li>
              <li><Link activeClass="selected" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
              <li><Link activeClass="selected" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
              <li><Link activeClass="selected" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </nav>

          <div className="home-text">
            <h1>Hey there!</h1>
            <h3>My name is Sarah Ali and I'm a software developer.</h3>
            <p>I'm in my <b>junior</b> year in <b>Computer Science</b> with a specialization in business at <b>Carleton University</b>.</p>
            <h3>Currently looking for internships for Summer 2021!</h3>

            <div className="socials">
              <a href="https://github.com/sarah23398"><img className="icon" src={require("./images/github.svg")}/></a>
              <a href="https://www.linkedin.com/in/sarah-ali-5b74a4134/"><img className="icon" src={require("./images/linkedin.svg")}/></a>
            </div>
          </div>

          <div className="empty"></div>

        </div>

      </section>

      <div id="experience" className="experience">
        <h2>work experience</h2>
        <div class="timeline">
          <div class="timeline-block">
            <Experience
              date="May 2020 - August 2020"
              company="Royal Bank of Canada"
              location="Montreal, QC"
              role="Front End Developer"
            />
            <ul>
              <li>Developed components/features for <b>RBC Online Banking for Business</b> credit card page using <b>Angular</b></li>
              <li>Introduced optimized ways to develop features e.g. for skeleton loading</li>
              <li>Investigated and <b>optimized pipeline testing time</b> and presented discoveries to department</li>
              <li>Analyzed and visualized <b>Jenkins build metrics</b> using <b>Splunk</b> and created scalable dashboard for whole department’s use</li>
              <li>Took on role as <b>Scrum Master</b> for two sprints and organized squad standups and retrospective, guided squad towards consistent delivery</li>
            </ul>
          </div>

          <div class="timeline-block">
            <Experience
              date="May 2019 - August 2019"
              company="Manulife"
              location="Kitchener, ON"
              role="Full Stack Software Engineer"
            />
            <ul>
              <li>Developed <b>Spring Boot API</b> and dynamic <b>Java web-application</b> deployed on <b>Pivotal Cloud Foundry</b> for reading and updating employee workforce data across <b>SQL Server</b> database</li>
              <li>Demoed <b>SQL Server</b> database solely created by self to <b>senior executives</b> and <b>data architects</b> across Canadian Segment</li>
              <li>Conducted department-wide employee peer Feedback Cycles complete with analysis, design, automation, testing and support for over 300 employees and leaders using <b>SQL</b> and <b>VBA</b></li>
            </ul>
          </div>

          <div class="timeline-block">
            <Experience
              date="January 2019 - April 2019"
              company="Manulife"
              location="Kitchener, ON"
              role="Business Systems Analyst"
            />
            <ul>
              <li>Created and maintained workforce management data of <b>over 500 raw records</b> for all of Group Benefits Technology</li>
              <li>Created single-source, scalable Workforce Management <b>SQL</b> database with data modeling, normalization, optimization and <b>weekly automated update scripts</b> hosted on <b>Pivotal Cloud Foundry</b></li>
              <li>Identified, analyzed and quantified inefficiencies in departmental processes with total impact of <b>over 600 wasted business days/year</b></li>
            </ul>
          </div>

          <div class="timeline-block">
            <Experience
              date="May 2017 - August 2017"
              company="Manulife"
              location="Waterloo, ON"
              role="Business Systems Analyst"
            />
            <ul>
              <li>Developed enhancements for existing applications using <b>Python</b> and <b>Qt</b> technology for GUIs</li>
              <li>Supported <b>three</b> Manulife applications and created weekly departmental and monthly metric reports</li>
              <li>Calculated departmental metric data using <b>Pivot Tables</b> and enhanced quality and accuracy by identifying and correcting systematic errors in procedure</li>
              <li>Resolved application incidents, analyzed application problems and created change requests</li>
            </ul>   
          </div>
        </div>
      </div>

      <div id="projects" className="projects">
        <h2>my projects</h2>
        <div className="grid-container">
          <div className="grid-item">
              <div className="grid-item-content">
                <img className="grid-item-image" src="sketchers.png"/>
                <div className="grid-item-info">
                  <Projects className="item2"
                    name="Sketchers - MongoDB Award"
                    link="https://devpost.com/software/sketchens#updates"
                    location="CUHacking 2020"
                    date="01/2020"
                  />
                  <p>Won Best Hack using MongoDB by Major League Hacking!</p>
                </div>
              </div>
            </div>

          <div className="grid-item">
            <div className="grid-item-content">
              <img className="grid-item-image" src="sketchers.png"/>
              <div className="grid-item-info">
                <Projects className="item2"
                  name="Sketchers - MongoDB Award"
                  link="https://devpost.com/software/sketchens#updates"
                  location="CUHacking 2020"
                  date="01/2020"
                />
                <p>Won Best Hack using MongoDB by Major League Hacking!</p>
                <p>Developed web application that visualizes the appearance and clothing of a suspect described by a witness</p>
                <p>Designed and developed user interface using React</p>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-content">
              <img className="grid-item-image" src="diamond_heist.png"/>
              <div class="grid-item-info">
                <Projects className="grid-item item3"
                  name="Diamond Heist"
                  link="https://github.com/sarah23398/CU_ArcadeJam_2019"
                  location="CU Game Jam 2019"
                  date="01/2020"
                />
                <p>Developed platform arcade game in Python Pygame</p>
                <p>Game Objective: Player scales the platforms on a building without falling off</p>
                <p>Developed and animated background and player mechanics</p>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-content">
              <img className="grid-item-image" src="werkout.png"/>
              <div className="grid-item-info">
                <Projects className="grid-item item4"
                  image="werkout.png"
                  name="Werkout"
                  link="https://devpost.com/software/werkout-zlkwx5"
                  location="HobbyHacks 2020"
                  date="08/2020"
                />
                <p>Created backend using MongoDB to connect to Android Studio mobile application that generates workout plans</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about">
        <h2>about me</h2>
        <p>Here are the organizations that I've been involved in!</p>
        <About
          organization="CU Blueprint"
          role="Project Developer"
          dates="09/2020 - Present"
          description="Main Front End Developer"
        />

        <About
          organization="Technolgap"
          role="Director of Inclusion"
          dates="08/2020 - Present"
          description="Leading Team Inclusion to organize events and initiatives to support and empower minorities in women in tech within Technolgap"
        />

        <About
          organization="Technolgap"
          role="Mentor"
          dates="08/2020 - Present"
          description=""
        />

        <About
          organization="Carleton Computer Science Society"
          role="Officer of Communications"
          dates="05/2020 - Present"
          description=""
        />
        <p>Here are awards I've won:</p>
        <About
          organization="Royal Bank of Canada"
          role="RBC Tomorrow Student Challenge - Team Lead"
          dates="08/2020"
          description="• Lead team of students to create a human-centered and innovative solution to increase youth financial independence
          • Innovated and designed a new savings loyalty program to increase youth
          customer acquisition for RBC
          • Presented solution to Director of RBC Investments and won13 badges
          of distinction"
        />

        <About
          organization="Carleton University"
          role="Dean's Honour List"
          dates="2019 - 2020"
          description="Scholarship and award for annual GPA of 11.4"
        />
      </div>

      <div id="contact" className="contact">
        <h2>contact me!</h2>
        <p>Email: sarahali@cmail.carleton.ca</p>
      </div>

      <div className="footer">
        <p>Created using React, HTML and CSS. (2020)</p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
      </div>
    </div>
  );
}

export default App;
