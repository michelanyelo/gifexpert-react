import {getGifs} from "../helpers/getGifs.js";
import {useEffect} from "react";

export const GifGrid = ({category}) => {

    useEffect(() => {
        getGifs(category);
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <p>Hola mundo desde GifGrid</p>
        </>
    )
}