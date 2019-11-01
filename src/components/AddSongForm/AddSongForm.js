import React, { Fragment } from 'react';

const addSongForm = props => {
    const styleForm = {
        margin: '20px auto 0',
        width: '700px'
    }

    const styleInput = {
        display: 'block',
        width: '100%',
        marginBottom: '10px',
        padding: '10px',
        font: 'inherit'
    };

    return (
        <Fragment>
            <h2>Voeg een song toe</h2>
            <form onSubmit={props.submitted} style={styleForm}>
                <input style={styleInput} type="Text" name="title" placeholder="Song" />
                <input style={styleInput} type="Text" name="artist" placeholder="Artist" />
                <input style={styleInput} type="Text" name="genre" placeholder="Genre" />
                <input style={styleInput} type="Text" name="rating" placeholder="Rating" />
                <input style={styleInput} type="Submit" />
            </form>
        </Fragment>
    );
};

export default addSongForm;