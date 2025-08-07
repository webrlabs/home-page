import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webr Labs</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tags" style={{ marginLeft: '20px' }}>Tags</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Justin Weber</p>
        <a href="https://www.linkedin.com/in/justin-weber87" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
};

export default Layout;
