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
            phrase3: "",
            image1:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
            image2: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        'England' : {     
            population: 56.0, // million
            capital: "London",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
            currency: "Pound sterling",
            language: "English", 
            phrase1: "Hi, how are you?",
            phrase2: "I'm fine, how about yourself?",
            phrase3: "I'm well, thank you.",
            image1:"https://unsplash.com/photos/W1Y4Y_DBGKw",
            image2: "https://unsplash.com/photos/x0RBBSdOZQU"               
        },
        'France' : {  
            population: 67.4, // million
            capital: "Paris",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",   
            currency: "Euro",
            language: "French",   
            phrase1: "Comment ça va?",
            phrase2: "",
            phrase3: "",
            image1:"https://media.istockphoto.com/photos/eiffel-tower-in-paris-skyline-at-dawn-picture-id1280246120?b=1&k=20&m=1280246120&s=170667a&w=0&h=9g8hb-FTp7TfrN6gItpxDFKG0wPjwvnZQlNHZaxyeeI=",
            image2: "https://media.cntraveler.com/photos/612ebcb802280b85918ca936/master/w_4000,h_2666,c_limit/Villefranche-sur-Mer-France-GettyImages-1248448159.jpg"               
        },
        'Scotland' : {   
            population: 5.5, // million
            capital: "Edinburgh",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg",
            currency: "Pound sterling",
            language: "English, Scots",
            phrase1: "Halò, ciamar a tha thu?",
            phrase2: "",
            phrase3: "",
            image1: "https://images.app.goo.gl/Cp446AawvmNDMCPM7",
            image2: "https://images.app.goo.gl/ZW9PxGhFzMRxiaTm7"                
        },
        'Germany' : {  
            population: 83.2, // million
            capital: "Berlin",
            flagImage: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
            currency: "Euro",
            language: "German",  
            phrase1: "Hallo, wie geht's?",
            phrase2: "Gut und dir?",
            phrase3: "Auch gut, danke.",
            image1: "https://www.planetware.com/wpimages/2020/01/germany-in-pictures-beautiful-places-to-photograph-neuschwanstein-castle-bavaria.jpg",
            image2: "https://media.istockphoto.com/photos/berlin-skyline-with-spree-river-at-sunset-germany-picture-id486585530?k=20&m=486585530&s=612x612&w=0&h=FnNkM2BgTNv5-WQUpT2iB5R_0YSeW32RnLP7FYzOVVY="                
        },
        'Spain' : {   
            population: 47.4, // million
            capital: "Madrid",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",                    
            currency: "Euro",
            language: "Spanish", 
            phrase1: "Hola, ¿cómo estás?",
            phrase2: "",
            phrase3: "",
            image1: "https://images.app.goo.gl/RYrsfQJTctdmCigv8",
            image2: "https://images.app.goo.gl/ZdcA2bPqPeN26G2Z7"
        },
        'Switzerland' : {
            population: 8.6, // million
            capital: "Bern",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
            currency: "Swiss franc",
            language: "German, French, Italian, Romansh", 
            phrase1: "Hi, wie gohts?",
            phrase2: "",
            phrase3: "",                           
            image1: "https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg",
            image2: "https://www.expatica.com/app/uploads/sites/9/2017/07/cost-of-living-in-switzerland-1920x1080.jpg"
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
            phrase3: "",
            image1: "https://new.visitfinland.com/dam/jcr:10100117-5154-4a6d-afb7-56502939f9e3/___Finland_Aurora_dome_Jeris_Antti_Pietik%C3%A4inen.12422788202013340987.jpg",
            image2: "https://afar-production.imgix.net/uploads/images/afar_post_headers/images/y7EZk77pNN/original_AR_Finland-Kakslauttanen_Kelo-glass_Igloo.jpg"            
        },
        'Austria' : { 
            population: 8.9, // million
            capital: "Vienna",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
            currency: "Euro",
            language: "German", 
            phrase1: "Hallo, wie geht's dir?",
            phrase2: "", 
            phrase3: "",
            image1: "https://www.planetware.com/wpimages/2019/11/austria-in-pictures-most-beautiful-places-hallstatt.jpg",
            image2: "https://media.istockphoto.com/photos/hallstatt-village-in-austria-picture-id507489863?k=20&m=507489863&s=612x612&w=0&h=Y2acddjn3n4yZBAtapDsUNQI4X-3Z_d0cRnASSZhIY0="            
        },
        'Sweden' : { 
            population: 10.4, // million
            capital: "Stockholm",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
            currency: "Swedish krona",
            language: "Swedish",   
            phrase1: "Hei, hur är du?",
            phrase2: "",
            phrase3: "",
            image1: "https://www.planetware.com/wpimages/2020/02/sweden-in-pictures-beautiful-places-to-photograph.jpg",
            image2: "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Sweden.jpg?h=7115b1d8&itok=Cr7aTYFE"            
        },
        'Norway' : {   
            population: 5.4, // million
            capital: "Oslo",
            flagImage: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
            currency: "Norwegian krone",
            language: "Norwegian",
            phrase1: "Hei, hvordan går det med deg?",
            phrase2: "",
            phrase3: "" ,
            image1: "https://media.cntraveler.com/photos/5a2fdec837dada794e16bd22/master/pass/Geirangerfjord-GettyImages-482832914.jpg",
            image2: "https://media.istockphoto.com/photos/view-on-bruges-picture-id494611794?k=20&m=494611794&s=612x612&w=0&h=GtwLqJ3YUpEnW8ex5-pNT3yzdgRC3xFrIo5bkinN5VM="            
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