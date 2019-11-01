import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import About from './About/About';
import AddSongForm from './AddSongForm/AddSongForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <h1>React Playlist</h1> 
          <Navigation />
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/add" exact component={AddSongForm} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
