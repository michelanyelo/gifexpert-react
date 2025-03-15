import {getGifs} from "../helpers/getGifs.js";
import {useEffect, useState} from "react";
import GifItem from "./GifItem.jsx";


export const GifGrid = ({category}) => {

    const [gifs, setGifs] = useState([]);

    const getGifList = async () => {
        const fetchedGifs = await getGifs(category);
        setGifs(fetchedGifs);
    };

    useEffect(() => {
        getGifList();
    }, []);

    return (<>
        <h3>Gifs de {category}</h3>
        <div className="card-grid">
            {gifs?.map((gif) => (
                <GifItem
                    key={gif.id}
                    {...gif}
                />
            ))}
        </div>
    </>)
}
