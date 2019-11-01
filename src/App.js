import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import PlayList from './components/PlayList/PlayList';
import About from './components/About/About';
import AddSongForm from './components/AddSongForm/AddSongForm';

class App extends Component {
  state = {
    songs: JSON.parse(localStorage.getItem('songs'))
  }

  fetchSongs = () => this.state.songs ? 

  addSongFormHandler = event => {
    const songs = fetchSongs()

    const newSong = {
      title: event.target.title,
      artist: event.target.artist,
      genre: event.target.genre,
      rating: event.target.rating
    };

  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <h1>React Playlist</h1> 
          <Navigation />
          <Switch>
            <Route path="/" exact component={PlayList} />
            <Route path="/about" exact component={About} />
            <Route path="/add" exact component={AddSongForm} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
