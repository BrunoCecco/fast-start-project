import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './CountryPage.css';

function CountryPage() {
    
    const {country} = useParams();

    const [countryName, setCountryName] = useState("");

    useEffect(() => {    
           
    })

    return (
        <div className="CountryPage">
            <h2>{country}</h2>     
        </div>
    );
}

export default CountryPage;