import React, { Fragment } from 'react';

const addSongForm = props => {
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
            <h2>Nummer toevoegen</h2>
            <form onSubmit={props.submitted} style={styleForm} autoComplete="off">
                <input style={styleInput} type="Text" name="title" placeholder="Nummer" />
                <input style={styleInput} type="Text" name="artist" placeholder="Artiest" />
                
                <label style={styleLabel} htmlFor="genre">Genre:</label>
                <select style={styleInput} name="genre" id="genre">
                    <option value="Dance">Dance</option>
                    <option value="House">House</option>
                    <option value="Nederlands">Nederlands</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Anders">Anders</option>
                </select>
                
                <label style={styleLabel} htmlFor="rating">Cijfer:</label>
                <select style={styleInput} name="rating" id="rating">
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