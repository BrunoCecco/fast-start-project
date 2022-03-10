
import React, {useEffect, useState} from 'react';
import './HomePage.css';

function HomePage() {

    const [countries, setCountries] = useState(
        [{
            countryName: "Russia",
            population: 10000000
        }]
    );

    useEffect(() => { 

    })

    return (
        <div className="HomePage">
            {countries.map(country => {
                <div>
                    {countries[0].population}
                </div>
            })}       
        </div>
    );
}

export default HomePage;