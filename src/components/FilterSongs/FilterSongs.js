import React from 'react';

const filterSongs = props => {
    const styleFiltersDiv = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '450px',
        margin: '0 auto 20px'
    };

    const styleFilterP = {
        display: 'flex',
        alignItems: 'center',
    };

    const styleFilterLabel = {
        marginRight: '10px'  
    };

    return (
        <div style={styleFiltersDiv}>
            <p style={styleFilterP}>
                <label htmlFor="genreFilter" style={styleFilterLabel}>Filter op genre:</label>
                <select id="genreFilter" name="genreFilter" onChange={props.genreFilterHandler}>
                    <option value="Alles">Toon alles</option>
                    <option value="Dance">Dance</option>
                    <option value="House">House</option>
                    <option value="Nederlands">Nederlands</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Anders">Anders</option>
                </select>
            </p>

            <p style={styleFilterP}>
                <label htmlFor="ratingFilter" style={styleFilterLabel}>Filter op cijfer:</label>
                <select id="ratingFilter" name="ratingFilter" onChange={props.ratingFilterHandler}>
                    <option value="Alles">Toon Alles</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </p>
        </div> 
    );
};

export default filterSongs;