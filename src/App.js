import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home'; // Import your Home component
import Library from './components/Library'; // Import your Library component
import Discover from './components/Discover'; // Import your Discover component
import Profile from './components/Profile'; // Import your Profile component
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include the Navbar component */}
        <main>
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/discover" element={<Discover />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
