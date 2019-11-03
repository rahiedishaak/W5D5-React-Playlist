import React, { Fragment } from 'react';

const editSongForm = props => {
    const styleForm = {
        margin: '20px auto 0',
        width: '700px'
    };

    const styleInput = {
        display: 'block',
        width: '100%',
        marginBottom: '10px',
        padding: '10px',
        font: 'inherit'
    };

    const styleLabel = {
        display: 'block',
        marginBottom: '5px',
        width: '100%',
        textAlign: 'left',
        fontSize: '12px'
    };

    return (
        <Fragment>
            <h2>Nummer bewerken: {props.location.state.song.title}</h2>
            <form 
                onSubmit={event => props.edited(event, props.location.state.song.id)} 
                style={styleForm} 
                autoComplete="off"
            >
                <input style={styleInput} type="Text" name="title" defaultValue={props.location.state.song.title} />
                <input style={styleInput} type="Text" name="artist" defaultValue={props.location.state.song.artist} />
                
                <label style={styleLabel} htmlFor="genre">Genre:</label>
                <select style={styleInput} name="genre" id="genre" defaultValue={props.location.state.song.genre}>
                    <option value="Dance">Dance</option>
                    <option value="House">House</option>
                    <option value="Nederlands">Nederlands</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Anders">Anders</option>
                </select>
                
                <label style={styleLabel} htmlFor="rating">Cijfer:</label>
                <select style={styleInput} name="rating" id="rating" defaultValue={props.location.state.song.rating}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                
                <input style={styleInput} type="Submit" />
            </form>
        </Fragment>
    );
};

export default editSongForm;