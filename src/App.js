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

  fetchSongs = () => this.state.songs ? [...this.state.songs] : [];

  addSongFormHandler = event => {
    event.preventDefault();
    
    if (event.target.title.value && event.target.artist.value && event.target.genre.value && event.target.rating.value) {
      const newSong = {
        id: Math.floor(Math.random() * 1000000000),
        title: event.target.title.value,
        artist: event.target.artist.value,
        genre: event.target.genre.value,
        rating: event.target.rating.value
      };

      const songs = this.fetchSongs();
      songs.push(newSong);
      localStorage.setItem('songs', JSON.stringify(songs));
      this.setState({songs: JSON.parse(localStorage.getItem('songs'))});

      event.target.title.value = '';
      event.target.artist.value = '';
      event.target.genre.value = '';
      event.target.rating.value = '';
    }
  };

  deleteSongButtonHandler = songID => {
    const songs = this.fetchSongs();
    const index = songs.findIndex(song => song.id === songID);
    songs.splice(index, 1);
    localStorage.setItem('songs', JSON.stringify(songs));
    this.setState({songs: JSON.parse(localStorage.getItem('songs'))});
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <h1>React Playlist</h1> 
          <Navigation />
          <Switch>
            <Route 
              path="/" 
              exact 
              render={props => <PlayList {...props} songs={this.state.songs} deleteClicked={this.deleteSongButtonHandler} />} />
            <Route
              path="/about" 
              exact 
              component={About}
            />
            <Route 
              path="/add"
              exact 
              render={props => <AddSongForm {...props} submitted={this.addSongFormHandler} />} 
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
