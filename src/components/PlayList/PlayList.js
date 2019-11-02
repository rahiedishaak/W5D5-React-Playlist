import React from 'react';

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

    const songs = props.songs.map(song => (
        <tr key={song.id}>
            <td style={styleTD}>{song.title}</td>
            <td style={styleTD}>{song.artist}</td>
            <td style={styleTD}>{song.genre}</td>
            <td style={styleTD}>{song.rating}</td>
            <td><button style={styleBtn} onClick={() => props.deleteClicked(song.id)}>verwijder</button></td>
        </tr>
    ));
    
    return (
        <table style={styleTable}>
            <thead>
                <tr>
                    <th style={styleTD}>Nummer</th>
                    <th style={styleTD}>Artiest</th>
                    <th style={styleTD}>Genre</th>
                    <th style={styleTD}>Beoordeling</th>
                </tr>
            </thead>
            <tbody>
                {songs}
            </tbody>
        </table>
    );
};

export default playList;