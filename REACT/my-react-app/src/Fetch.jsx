import axios from "axios";
import React, { useEffect, useState } from "react";

function Fetch(){
    const [data, setData] = useState(null);
    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon/greninja").then((resp)=> {
            setData(resp.data.sprites.front_default);
        });
    }, []);

    return(
        <div>
            <img src={data} width={250} alt="" />
        </div>
    )
}

export default Fetch