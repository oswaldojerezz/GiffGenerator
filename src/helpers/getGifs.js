

export const getGifs = async(category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=nTP8Teg9PgcqYpcKhiuFyDgZa5cqgYQr&limit=10&q=${ encodeURI(category) }`;
    const resp = await fetch (URL);
    const {data} = await resp.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}