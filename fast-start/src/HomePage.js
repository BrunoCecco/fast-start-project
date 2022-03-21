import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

function HomePage() {

    const [countries, setCountries] = useState({
        'Italy' : {        
            population: 59.5, // million
            capital: "Rome",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png?20111003040337",
            currency: "Euro",
            language: "Italian",
            phrase1: "Ciao, come stai?",
            phrase2: "",
            phrase3: ""
        },
        'England' : {     
            population: 56.0, // million
            capital: "London",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
            currency: "Pound sterling",
            language: "English", 
            phrase1: "Hi, how are you?",
            phrase2: "",
            phrase3: ""                
        },
        'France' : {  
            population: 67.4, // million
            capital: "Paris",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",   
            currency: "Euro",
            language: "French",   
            phrase1: "Comment ça va?",
            phrase2: "",
            phrase3: ""               
        },
        'Scotland' : {   
            population: 5.5, // million
            capital: "Edinburgh",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg",
            currency: "Pound sterling",
            language: "English, Scots",
            phrase1: "",
            phrase2: "",
            phrase3: ""                
        },
        'Germany' : {  
            population: 83.2, // million
            capital: "Berlin",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
            currency: "Euro",
            language: "German",  
            phrase1: "Hallo, wie geht's?",
            phrase2: "",
            phrase3: ""                
        },
        'Spain' : {   
            population: 47.4, // million
            capital: "Madrid",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",                    
            currency: "Euro",
            language: "Spanish", 
            phrase1: "Hola, ¿cómo estás?",
            phrase2: "",
            phrase3: ""
        },
        'Switzerland' : {
            population: 8.6, // million
            capital: "Bern",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
            currency: "Swiss franc",
            language: "German, French, Italian, Romansh", 
            phrase1: "Hi, wie gohts?",
            phrase2: "",
            phrase3: ""                           
        },
        'Wales' : {     
            population: 3.1, // million
            capital: "Cardiff",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg",
            currency: "Pound sterling",
            language: "English, Welsh",         
            phrase1: "Helô, shw mae?",
            phrase2: "",
            phrase3: ""       
        },
        'Finland' : {   
            population: 5.5, // million
            capital: "Helsinki",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
            currency: "Euro",
            language: "Finnish",
            phrase1: "Hei, mitä kuuluu?",
            phrase2: "",
            phrase3: ""                 
        },
        'Austria' : { 
            population: 8.9, // million
            capital: "Vienna",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
            currency: "Euro",
            language: "German", 
            phrase1: "Hallo, wie geht's dir?",
            phrase2: "", 
            phrase3: ""             
        },
        'Sweden' : { 
            population: 10.4, // million
            capital: "Stockholm",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
            currency: "Swedish krona",
            language: "Swedish",   
            phrase1: "Hei, hur är du?",
            phrase2: "",
            phrase3: ""                 
        },
        'Norway' : {   
            population: 5.4, // million
            capital: "Oslo",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
            currency: "Norwegian krone",
            language: "Norwegian",
            phrase1: "Hei, hvordan går det med deg?",
            phrase2: "",
            phrase3: ""             
        }               
    }
    );

    return (
        <div className="home-page">
            <h2>Countries</h2>
            <div className="countries-grid">
                {Object.entries(countries).map(([country, details], index) => { // loop through countries, returning a grid box for each one
                    return (
                        <Link style={{backgroundImage: `url(${details.flagImage}` }} 
                        to={{
                            pathname: "/" + country
                        }} 
                        state={details}
                        key={index} 
                        className="grid-box" />                                                                                
                    )
                })}       
            </div>
        </div>
    );
}

export default HomePage;