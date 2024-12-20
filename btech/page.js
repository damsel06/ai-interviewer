
import React from 'react';
import './App.css';

<button onclick="window.location.href='btech.html'">BTECH</button>



function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>History</h2>
        <ul>
          <li>Conversation 1</li>
          <li>Conversation 2</li>
          <li>Conversation 3</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="content-display">
          <h1>Welcome to the ChatGPT-like App</h1>
          <p>Type something in the search bar to begin.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

/* App.css */

 
 