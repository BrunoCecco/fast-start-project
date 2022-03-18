import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import './CountryPage.css';

function CountryPage() {
    
    const {country} = useParams();
    const details = useLocation();

    const [countryName, setCountryName] = useState("");
    const [capital, setCapital] = useState("");
    const [population, setPopulation] = useState(0);

    useEffect(() => {    
        setPopulation(details.state.population);
        setCapital(details.state.capital);
    })    

    return (
        <div className="country-page">
            <h2>{country}</h2>  
            <p>{capital}</p>   
            <p>{population}</p>
        </div>
    );
}

export default CountryPage;