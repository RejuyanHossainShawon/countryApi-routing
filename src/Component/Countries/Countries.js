import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
    const {name,capital} = props.country;
    const countryStyle = {
        border:'1px solid red',
        margin: '20px',
        padding: "20px",
        borderRadius: '20px',
        textAlign: 'center'
    }
    const history = useHistory();
    const handleClick = (countryName) =>{
        history.push(`/country/${countryName}`);

    }
    return (
        <div style={countryStyle}>
            <h2>{name}</h2>
            <h4>{capital}</h4>
            <Link to={`/country/${name}`}>Details</Link>
            <button onClick={() => handleClick(name)}>click</button>

        </div>
    );
};

export default Countries;