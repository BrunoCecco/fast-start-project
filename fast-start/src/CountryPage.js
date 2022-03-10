import React, {useEffect, useState} from 'react';

function CountryPage() {

    const [countryName, setCountryName] = useState("Russia");

    useEffect(() => {        
    })


    return (
        <div className="CountryPage">
            {countryName}
        </div>
    );
}

export default CountryPage;