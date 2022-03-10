import React, {useEffect, useState} from 'react';
import './HomePage.css';

function HomePage() {

    useEffect(() => {
        fetch('http://www.geognos.com/api/en/countries/info/FR.json')
        .then(response => response.json())
        .then(data => console.log(data));        
    })


    return (
        <div className="HomePage">
            <p>hi</p>
        </div>
    );
}

export default HomePage;