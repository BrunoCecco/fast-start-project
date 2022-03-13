import React, {useState} from 'react';
import './HomePage.css';

function HomePage() {

    const [countries, setCountries] = useState({
        'Italy' : {        
            population: 59.5, // million
            capital: "Rome",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png?20111003040337"                  
        },
        'England' : {                         
        },
        'France' : {                         
        },
        'Scotland' : {                         
        },
        'Germany' : {                         
        },
        'Spain' : {                         
        },
        'Switzerland' : {                         
        },
        'Wales' : {                         
        },
        'Finland' : {                         
        },
        'Austria' : {                         
        },
        'Sweden' : {                         
        },
        'Norway' : {                         
        }               
    }
    );

    return (
        <div className="home-page">
            <h2>Countries</h2>
            <div className="countries-grid">
                {Object.entries(countries).map(([country, details], index) => { // loop through countries, returning a grid box for each one
                    return (
                        <a style={{backgroundImage: `url(${details.flagImage}` }} href={"/" + country} key={index} className="grid-box">                            
                            <p>{country}</p>
                            <p>Population: {details.population}m</p>
                            <p>Capital: {details.capital}</p>
                        </a>
                    )
                })}       
            </div>
        </div>
    );
}

export default HomePage;