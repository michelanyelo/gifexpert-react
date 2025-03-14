import {getGifs} from "../helpers/getGifs.js";
import {useEffect, useState} from "react";

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
        <ol>
            {gifs?.map(({id, title, img}) => (<li key={id}>
                <p>{title}</p>
                <img
                    src={img}
                    alt={title}
                    style={{width: '300px', height: '300px', objectFit: 'cover'}}
                />
            </li>))}
        </ol>
    </>)
}
