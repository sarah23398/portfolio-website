import React from 'react' 
import About from './About';
import './App.css';
import Experience from './Experience';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header className="header">
          <nav className="header-nav-wrap">
            <ul className="header-nav">
              <li className="selected"><a href="#home" className="item">Home</a></li>
              <li><a href="#experience" className="item">Work Experience</a></li>
              <li><a href="#projects" className="item">Projects</a></li>
              <li><a href="#about" className="item">About</a></li>
              <li><a href="#contact" className="item">Contact</a></li>
            </ul>
          </nav>
      </header>

      <section id="home" className="home">
        <img className="background-img" src="sarah.jpg" height="786" align="left"/>
        <div className="home-text">
          <h1>Hey there!</h1>
          <h3>My name is Sarah Ali and I'm a software developer.</h3>
          <p>I'm in my <b>third year</b> in <b>Computer Science</b> with a specialization in business at <b>Carleton University</b>.</p>
          <h3>Graduating in Summer 2022!</h3>
        </div>
        
        <div className="socials">
          <a href="" className="item">Github</a>
          <a href="" className="item">LinkedIn</a>
        </div>
      </section>

      <div id="experience" className="experience">
        <h2>work experience</h2>
        <div class="timeline">
          <div class="timeline-block">
            <Experience
              date="05/2020 - 08/2020"
              company="Royal Bank of Canada"
              location="Montreal, QC"
              role="Front End Developer"
            />
            <ul>
              <li>Developed components/features for RBC Online Banking for Business credit card page using Angular</li>
              <li>Introduced optimized ways to develop features e.g. for skeleton loading</li>
              <li>Investigated and optimized pipeline testing time and presented discoveries to department</li>
              <li>Analyzed and visualized Jenkins build metrics using Splunk and created scalable dashboard for whole department’s use</li>
              <li>Took on role as Scrum Master for two sprints and organized squad standups and retrospective, guided squad towards consistent delivery"</li>
            </ul>
          </div>

          <div class="timeline-block">
            <Experience
              date="05/2019 - 08/2019"
              company="Manulife"
              location="Kitchener, ON"
              role="Full Stack Software Engineer"
            />
            <ul>
              <li>Developed Spring Boot API for reading and updating data across SQL Server relational database and dynamic front-end web application</li>
              <li>Demoed Workforce Management database created by self to senior executives and data architects across Canadian Segment</li>
              <li>Conducted department-wide employee peer Feedback Cycles complete with analysis, design, automation, testing and supportfor over 300 employees and leaders using SQL, Excel and VBA</li>
            </ul>
          </div>

          <div class="timeline-block">
            <Experience
              date="01/2019 - 04/2019"
              company="Manulife"
              location="Kitchener, ON"
              role="Business Systems Analyst"
            />
            <ul>
              <li>Created and maintained workforce management data of over 500 raw records for whole GB Technology workforce</li>
              <li>Created single-source, scalable Workforce Management MySQL database with data modeling, normalization, optimization and weekly automated updates with MySQL scripting</li>
              <li>Identified, analyzed and quantified inefficiencies in departmental processes with total impact of over 600 wasted business days/year"</li>
            </ul>
          </div>

          <div class="timeline-block">
            <Experience
              date="05/2017 - 08/2017"
              company="Manulife"
              location="Waterloo, ON"
              role="Business Systems Analyst"
            />
            <ul>
              <li>Traced and developed enhancements for existing applications using Python and Qt technology for GUIs</li>
              <li>Supported three Manulife applications and created weekly departmental reports and monthly metric reports</li>
              <li>Calculated monthly departmental metric data using Pivot Tables and enhanced quality and accuracy by identifying and correcting systematic errors in procedure</li>
              <li>Resolved application incidents, analyzed application problems and created change requests</li>
              <li>Wrote business requirements to be developed by self and carried to release into production</li>
              <li>Active member of departmental Social Committee – contributed to workplace initiatives and events</li>
            </ul>   
          </div>
        </div>
      </div>

      <div id="projects" className="projects">
        <h2>my projects</h2>
        <div className="grid-container">
          <Projects className="item1"
            image=""
            name="WaitHere (in progress)"
            date="09/2020"
            description="Virtual waiting room web application for store and bank customers during lockdown developed using Angular"
          />

          <Projects className="item2"
            image=""
            name="Sketchers - MongoDB Award"
            link=""
            location="CUHacking 2020"
            date="01/2020"
            description=" Won Best Hack using MongoDB by Major League Hacking
            • Developed web application that visualizes the appearance and clothing
            of a suspect described by a witness
            • Designed and developed user interface using React"
          />

          <Projects className="item3"
            image=""
            name="Diamond Heist"
            link=""
            location="CU Game Jam 2019"
            date="01/2020"
            description="• Developed platform arcade game in Python Pygame
            • Game Objective: Player scales the platforms on a building withoutfalling
            off
            • Developed and animated background and player mechanics"
          />

          <Projects className="item4"
            image=""
            name="Werkout"
            link=""
            location="Tech Together Hackathon"
            date="07/2020"
            description="Created backend using MongoDB to connect to Android Studio mobile application that generates workout plans"
          />
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
        <span>Apapted from design by <a href="https://www.styleshout.com/">styleshout</a></span>
      </div>
    </div>
  );
}

export default App;
