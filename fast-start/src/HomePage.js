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
            population: 56.0, // million
            capital: "London",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg"                  
        },
        'France' : {  
            population: 67.4, // million
            capital: "Paris",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"                      
        },
        'Scotland' : {   
            population: 5.5, // million
            capital: "Edinburgh",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg"                    
        },
        'Germany' : {  
            population: 83.2, // million
            capital: "Berlin",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"                      
        },
        'Spain' : {   
            population: 47.4, // million
            capital: "Madrid",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg"                    
        },
        'Switzerland' : {
            population: 8.6, // million
            capital: "Bern",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg"                        
        },
        'Wales' : {     
            population: 3.1, // million
            capital: "Cardiff",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg"                
        },
        'Finland' : {   
            population: 5.5, // million
            capital: "Helsinki",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg"                     
        },
        'Austria' : { 
            population: 8.9, // million
            capital: "Vienna",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"                        
        },
        'Sweden' : { 
            population: 10.4, // million
            capital: "Stockholm",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg"                       
        },
        'Norway' : {   
            population: 5.4, // million
            capital: "Oslo",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"                  
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