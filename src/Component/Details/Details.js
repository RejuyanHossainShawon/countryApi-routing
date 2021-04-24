import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {name} = useParams();
    const [details,setDetails] = useState({});
    
    useEffect( () => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        
        .then(res => res.json())
        .then(data =>setDetails(data[0]))
       
        

    },[]);
    const {capital,population,region}= details;
    
     

 
 

     
    return (
        <div>
            <h2>{name}</h2>
            <h4>{capital}</h4>
            <h5>{population}</h5>
            <h6>{region}</h6>
            
            
            
        </div>
    );
};

export default Details;