import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import PlayList from './components/PlayList/PlayList';
import About from './components/About/About';
import AddSongForm from './components/AddSongForm/AddSongForm';
import EditSongForm from './components/EditSongForm/EditSongForm';

class App extends Component {
  state = {
    songs: localStorage.getItem('songs') ? JSON.parse(localStorage.getItem('songs')) : [],
    sortASC: true
  }

  fetchSongs = () => localStorage.getItem('songs') ? JSON.parse(localStorage.getItem('songs')) : [];

  addSongFormHandler = event => {
    event.preventDefault();
    
    if (event.target.title.value && event.target.artist.value && event.target.genre.value && event.target.rating.value) {
      const newSong = {
        id: Math.floor(Math.random() * 1000000000),
        title: event.target.title.value,
        artist: event.target.artist.value,
        genre: event.target.genre.value,
        // eslint-disable-next-line
        rating: parseInt(event.target.rating.value)
      };

      const songs = this.fetchSongs();
      songs.push(newSong);
      localStorage.setItem('songs', JSON.stringify(songs));
      this.setState({songs: JSON.parse(localStorage.getItem('songs'))});

      setTimeout(() => {
        window.location.href = '/';
      }, 400);
    }
  };

  editSongFormHandler = (event, songID) => {
    event.preventDefault();

    if (event.target.title.value && event.target.artist.value && event.target.genre.value && event.target.rating.value) {

      const songs = this.fetchSongs();
      const index = songs.findIndex(song => song.id === songID);
      songs[index] = {
        id: songID,
        title: event.target.title.value,
        artist: event.target.artist.value,
        genre: event.target.genre.value,
        // eslint-disable-next-line
        rating: parseInt(event.target.rating.value)
      };

      localStorage.setItem('songs', JSON.stringify(songs));
      this.setState({songs: JSON.parse(localStorage.getItem('songs'))});

      setTimeout(() => {
        window.location.href = '/';
      }, 400);
    }
  };

  deleteSongButtonHandler = songID => {
    const songs = this.fetchSongs();
    const index = songs.findIndex(song => song.id === songID);
    songs.splice(index, 1);
    localStorage.setItem('songs', JSON.stringify(songs));
    this.setState({songs: JSON.parse(localStorage.getItem('songs'))});
  };

  sortHandler = sortBy => {
    const songs = this.fetchSongs();

    if (this.state.sortASC) {
      songs.sort((song1, song2) => {
        if (song1[sortBy] < song2[sortBy]) return -1;
        else if (song1[sortBy] > song2[sortBy]) return 1;
        else return 0;
      })
    } else {
      songs.sort((song1, song2) => {
        if (song1[sortBy] > song2[sortBy]) return -1;
        else if (song1[sortBy] < song2[sortBy]) return 1;
        else return 0;
      })
    }

    this.setState({
      songs: songs,
      sortASC: !this.state.sortASC
    });
  }

  genreFilterHandler = event => {
    const songs = this.fetchSongs();
    if (event.target.value === 'Alles') {
      this.setState({songs: JSON.parse(localStorage.getItem('songs'))})
    } else {
      const filteredSongs = songs.filter(song => song.genre === event.target.value);
      this.setState({songs: filteredSongs});
    }
  }

  ratingFilterHandler = event => {
    const songs = this.fetchSongs();
    if (event.target.value === 'Alles') {
      this.setState({songs: JSON.parse(localStorage.getItem('songs'))})
    } else {
      // eslint-disable-next-line
      const filteredSongs = songs.filter(song => song.rating === parseInt(event.target.value));
      this.setState({songs: filteredSongs});
    }
  }

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
              render={props => <PlayList 
                {...props} 
                songs={this.state.songs} 
                genreFilterHandler={this.genreFilterHandler}
                ratingFilterHandler={this.ratingFilterHandler}
                deleteClicked={this.deleteSongButtonHandler} 
                clickedSort={this.sortHandler}
                edited={this.editSongFormHandler} />} 
              />
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
            <Route
              path="/edit/:id"
              exact
              render={props => <EditSongForm {...props} edited={this.editSongFormHandler} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
