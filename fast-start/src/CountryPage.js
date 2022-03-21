import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import './CountryPage.css';

function CountryPage() {
    
    const {country} = useParams();
    const details = useLocation();

    const [countryName, setCountryName] = useState("");
    const [capital, setCapital] = useState("");
    const [population, setPopulation] = useState(0);
    const [currency, setCurrency] = useState("");
    const [language, setLanguage] = useState("");
    const [phrase1, setPhrase1] = useState("");
    const [phrase2, setPhrase2] = useState("");
    const [phrase3, setPhrase3] = useState("");

    useEffect(() => {    
        setPopulation(details.state.population);
        setCapital(details.state.capital);
        setCurrency(details.state.currency);
        setLanguage(details.state.language);
        setPhrase1(details.state.phrase1);
        setPhrase2(details.state.phrase2);
        setPhrase3(details.state.phrase3);
    })    

    return (
        <div className="country-page">
            <h2>{country}</h2>  
            <p>{capital}</p>   
            <p>{population}</p>
            <p>{currency}</p>
            <p>{language}</p>
            <div className = "phrases">
                <p>{phrase1}</p>
                <p>{phrase2}</p>
                <p>{phrase3}</p>
            </div>

        </div>
    );
}

export default CountryPage;