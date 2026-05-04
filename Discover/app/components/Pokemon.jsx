import React, {useEffect, useState} from 'react';



const Pokemon = () => {
    const [data, setData] = useState([[]]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(data => setData(response.results[[]]))
    }, []);
    return (
        <div>

        </div>
    );
};
export default Pokemon;