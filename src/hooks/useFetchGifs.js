import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";

const UseFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifList = async () => {
        const fetchedGifs = await getGifs(category);
        setGifs(fetchedGifs);
        setIsLoading(false);
    };

    useEffect(() => {
        getGifList();
    }, []);

    return {
        gifs,
        isLoading
    }
};

export default UseFetchGifs;