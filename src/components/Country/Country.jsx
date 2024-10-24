import { useState } from "react";

 const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => {
    const {name,flags,population,area,cca3}= country;

    const [visited,setVisited]= useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    //  const passWithParams =() =>{handleVisitedCountry(country)};
       
    // console.log( handleVisitedCountry)
  
    return (
        <div className={`box ${visited ?'visited':'noneVisited'}`}>
            <h3 style={{color:visited ? 'purple':'black'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Popilation:{population}</p>
            <p>area:{area}</p>
            <p>Code:{cca3}</p>

            <button onClick={() =>handleVisitedCountry(country)}>Mark visited</button>
            <br /><br />

            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>

            <br /><br />

            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {
              visited ? ' I have visited this country.': 'I want to visit'  
            }
            
        </div>
    );
};

export default Country;
