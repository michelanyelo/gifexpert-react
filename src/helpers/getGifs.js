export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_SECRET_KEY}&q=${category}&limit=2`;
    const response = await fetch(url);
    const {data} = await response.json();

    return data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        img: gif.images?.downsized_medium.url,
    }));
}