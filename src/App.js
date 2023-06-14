import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showProjects, setShowProjects] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleToggleProjects = () => {
    setShowProjects(!showProjects);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="App-header">
        <h1>Powerful Website</h1>
        <p>Welcome to my portfolio</p>
        <button className="dark-mode-toggle" onClick={handleToggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="App-content">
        <section className="About">
          <h2>About Me</h2>
          <p>
            I am a passionate frontend developer with expertise in React.js. I love creating visually stunning and user-friendly web applications.
          </p>
        </section>
        <section className="Skills">
          <h2>Skills</h2>
          <ul>
            <li
              className={selectedSkill === 'React' ? 'selected' : ''}
              onClick={() => handleSelectSkill('React')}
            >
              React.js
            </li>
            <li
              className={selectedSkill === 'JavaScript' ? 'selected' : ''}
              onClick={() => handleSelectSkill('JavaScript')}
            >
              JavaScript
            </li>
            <li
              className={selectedSkill === 'HTML' ? 'selected' : ''}
              onClick={() => handleSelectSkill('HTML')}
            >
              HTML
            </li>
            <li
              className={selectedSkill === 'CSS' ? 'selected' : ''}
              onClick={() => handleSelectSkill('CSS')}
            >
              CSS
            </li>
            <li
              className={selectedSkill === 'Responsive' ? 'selected' : ''}
              onClick={() => handleSelectSkill('Responsive')}
            >
              Responsive Design
            </li>
            <li
              className={selectedSkill === 'UI/UX' ? 'selected' : ''}
              onClick={() => handleSelectSkill('UI/UX')}
            >
              UI/UX Design
            </li>
          </ul>
        </section>
        {showProjects && (
          <section className="Projects">
            <h2>Projects</h2>
            <div className="Project">
              <h3>Project 1</h3>
              <p>A React-based e-commerce website with advanced features.</p>
              <a href="#">View Project</a>
            </div>
            <div className="Project">
              <h3>Project 2</h3>
              <p>A responsive portfolio website built using React.js and CSS.</p>
              <a href="#">View Project</a>
            </div>
          </section>
        )}
        <section className="Contact">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
        <section className="Quotes">
          <h2>Inspiring Quotes</h2>
          <div className="Quote">
            <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
          </div>
          <div className="Quote">
            <p>"Believe you can and you're halfway there." - Theodore Roosevelt</p>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Powerful Website. All rights reserved.</p>
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          Scroll to Top
        </button>
      </footer>
    </div>
  );
}

export default App;
