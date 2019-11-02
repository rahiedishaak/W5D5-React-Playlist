import React, { Fragment } from 'react';
import FilterSongs from '../FilterSongs/FilterSongs';

const playList = props => {
    const styleTable = {
        textAlign: 'left',
        marginLeft: '20px',
        width: '90%'
    };

    const styleTD = {
        padding: '3px'
    };

    const styleBtn = {
        backgroundColor: 'red',
        padding: '5px',
        color: 'white',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
    };

    const styleSpan = {
        marginLeft: '4px',
        fontSize: '12px',
        fontWeight: 'normal',
        letterSpacing: '1.2px',
        color: '#666',
        cursor: 'pointer'
    };

    const songs = props.songs.map(song => (
        <tr key={song.id}>
            <td style={styleTD}>{song.title}</td>
            <td style={styleTD}>{song.artist}</td>
            <td style={styleTD}>{song.genre}</td>
            <td style={styleTD}>
                {[...new Array(song.rating)].map(_ => _ = '*')}                
            </td>
            <td><button style={styleBtn} onClick={() => props.deleteClicked(song.id)}>verwijder</button></td>
        </tr>
    ));
    
    return (
        <Fragment>
            <FilterSongs 
                genreFilterHandler={props.genreFilterHandler} 
                ratingFilterHandler={props.ratingFilterHandler} />
            <table style={styleTable}>
                <thead>
                    <tr>
                        <th style={styleTD}>
                            Nummer
                            <span style={styleSpan} onClick={() => props.clickedSort('title')}>(sorteer)</span>
                        </th>
                        <th style={styleTD}>
                            Artiest
                            <span style={styleSpan} onClick={() => props.clickedSort('artist')}>(sorteer)</span>
                        </th>
                        <th style={styleTD}>
                            Genre
                            <span style={styleSpan} onClick={() => props.clickedSort('genre')}>(sorteer)</span>
                        </th>
                        <th style={styleTD}>
                            Beoordeling
                            <span style={styleSpan} onClick={() => props.clickedSort('rating')}>(sorteer)</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {songs}
                </tbody>
            </table>
        </Fragment>
    );
};

export default playList;