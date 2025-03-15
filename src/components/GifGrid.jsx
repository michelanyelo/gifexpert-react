import GifItem from "./GifItem.jsx";
import useFetchGifs from "../hooks/useFetchGifs.js";


export const GifGrid = ({category}) => {

    const {gifs, isLoading} = useFetchGifs(category);

    return (<>
        <h3>Gifs de {category}</h3>
        {isLoading && <h4>Cargando...</h4>}
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
