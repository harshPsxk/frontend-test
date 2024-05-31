import React from 'react';
import Header from './components/Header';
import VisionClarification from './components/VisionClarification';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <VisionClarification />
        </div>
      </div>
    </div>
  );
}

export default App;
