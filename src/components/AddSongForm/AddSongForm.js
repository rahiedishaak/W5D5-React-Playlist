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
            <form onSubmit={props.submitted} style={styleForm} autoComplete="off">
                <input style={styleInput} type="Text" name="title" placeholder="Song" />
                <input style={styleInput} type="Text" name="artist" placeholder="Artist" />
                <select style={styleInput} name="genre">
                    <option value="" disabled selected>Genre</option>
                    <option value="Dance">Dance</option>
                    <option value="House">House</option>
                    <option value="Nederlands">Nederlands</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Anders">Anders</option>
                </select>
                <select style={styleInput} name="rating">
                    <option value="" disabled selected>Cijfer</option>
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

export default addSongForm;