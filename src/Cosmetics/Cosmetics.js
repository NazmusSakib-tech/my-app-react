import React, {useState,useEffect} from 'react';
import { add } from '../utilities/storage';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect( ()=>{
        fetch('./cosmetics.json') 
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }      
        ,[])
    return (
        <div>
            <h2>Total Marks: {add(50,60)}</h2>
        </div>
    );
};

export default Cosmetics;