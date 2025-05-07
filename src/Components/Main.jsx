import React from "react";
import './Main.css'
import profile from '../assets/profile.jpg'

function Main() {
   return (
    <main>

        <section className="hero-section">
            <div className="hero-content">
            <h1 className="hero-title">Hi, I'm MARQ.</h1>
            <p className="hero-description">
                A Ugandan software engineer obsessed with building beautiful, functional, and user-friendly web and mobile applications.
            </p>
            </div>
        </section>

        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="projects-grid">
            {/* Project 1: Photography Business Website */}
            <div className="project-card">
                <h3>Photography Business Website</h3>
                <p>
                A responsive website for my photography business, showcasing my portfolio, services, and contact information.
                Built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and integrated with a <strong>CMS</strong> for easy content updates.
                </p>
                <div className="tech-used">
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>CMS</span>
                </div>
                <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
                </a>
            </div>

            {/* Project 2: Blog Post Web Application */}
            <div className="project-card">
                <h3>Blog Post Web Application</h3>
                <p>
                A full-stack blog post application where users can create, read, update, and delete blog posts. 
                Features include user authentication, rich text editing, image uploads, and real-time updates. 
                Built with <strong>React</strong>, <strong>Tailwind CSS</strong> and <strong>Firebase</strong>.
                </p>
                <div className="tech-used">
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Firebase</span>
                </div>
                <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
                </a>
            </div>


            {/* Project 3: Hair & Nail Salon Appointment Mobile App */}
            <div className="project-card">
                <h3>Salon Appointment Mobile App</h3>
                <p>
                A Mobile application for managing appointments for a hair and nail salon. Features include online booking, 
                appointment reminders, and admin dashboard. Built with <strong>React-Native</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.
                </p>
                <div className="tech-used">
                <span>React-Native</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                </div>
                <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
                </a>
            </div>

            {/* Project 3: Photography Studio Dashboard (In Progress) */}
            <div className="project-card">
                <h3>Photography Studio Dashboard</h3>
                <p>
                A startup project for managing a photography studio. Includes a dashboard for studio management, 
                a client portal for image delivery, and a photo-print store. Built with <strong>React</strong>, <strong>Node.js</strong>, <strong>SQL</strong> and <strong>Stripe</strong> for payments.
                </p>
                <div className="tech-used">
                    <span>React (NEXT.js)</span>
                    <span>Node.js</span>
                    <span>SQL</span>
                </div>
                    <button className="project-link" disabled>
                    In Progress
                    </button>
                </div>
            </div>
        </section>

            <section id="tech-stack" className="section">
            <h2>My Tech Stack</h2>
            <div className="tech-stack-grid">
                <div className="tech-card">
                <div className="tech-icon">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg" alt="React" />
                </div>
                <h3>React</h3>
                <div className="progress-bar">
                    <div className="progress" style={{ width: "90%" }}></div>
                </div>
                <p>Building dynamic and responsive user interfaces with React and its ecosystem.</p>
                </div>
                <div className="tech-card">
                <div className="tech-icon">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg" alt="Node.js" />
                </div>
                <h3>Node.js</h3>
                <div className="progress-bar">
                    <div className="progress" style={{ width: "85%" }}></div>
                </div>
                <p>Developing scalable backend systems and APIs with Node.js and Express.</p>
                </div>
                <div className="tech-card">
                <div className="tech-icon">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg" alt="JavaScript" />
                </div>
                <h3>JavaScript</h3>
                <div className="progress-bar">
                    <div className="progress" style={{ width: "95%" }}></div>
                </div>
                <p>Mastering modern JavaScript (ES6+) for both frontend and backend development.</p>
                </div>
                <div className="tech-card">
                <div className="tech-icon">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg" alt="CSS" />
                </div>
                <h3>CSS</h3>
                <div className="progress-bar">
                    <div className="progress" style={{ width: "88%" }}></div>
                </div>
                <p>Creating beautiful and responsive designs with CSS and preprocessors like SASS and tailwind CSS.</p>
                </div>
            </div>
            </section>

            <section id="about-me" className="section">
            <h2>About Me</h2>
            <div className="about-content">
                <p className="about-description">
                <img src={profile} alt="Profile" className="profile-image" />
                My name is <strong>MARK</strong>, though i like to spell it <strong>MARQ</strong>, am a detail-oriented full stack developer with a love for building beautiful, functional and user-friendly web and mobile applications. 
                With a strong foundation in <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Node.js</strong>, I specialize in creating dynamic and responsive user interfaces 
                as well as scalable backend systems.
                </p>
                <p>
                I enjoy solving complex problems and turning ideas into reality through clean and efficient code. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects 
                that challenge my creativity and technical skills.
                </p>
                <p>
                Here are a few technologies I've been working with recently:
                </p>
                <ul className="tech-list">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>GraphQL</li>
                <li>MongoDB</li>
                <li>Docker</li>
                <li>And Flask</li>
                </ul>
                <p>
                Let's build something amazing together!
                </p>
            </div>
            </section>

            <section id="contact-me" className="section">
            <h2>Get in Touch</h2>
            <div className="contact-content">
                <p>
                Have a project in mind or just want to say hello? I'd love to hear from you! 
                Feel free to reach out using the form below, and I'll get back to you as soon as possible.
                </p>
                <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="150" required></textarea>
                <button type="submit">Send Message</button>
                </form>
            </div>
            </section>
        
      </main>
    )
}

export default Main
