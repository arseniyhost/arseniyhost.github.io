import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import News from './components/News.js/News';
import Contact from './components/Contact/Contact';
import MatchesContainer from './components/Matches/MatchesContainer';
import AddMatchContainer from './components/AddMatch/AddMatchContainer';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Route path="/matches" render={() => <MatchesContainer />} />
      <Route path="/addmatch" render={() => <AddMatchContainer />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/contact" render={() => <Contact />} />
    </div>
  )
}

export default App;
