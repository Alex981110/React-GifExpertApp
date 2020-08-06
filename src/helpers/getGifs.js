// Las helpers van a ser funciones que realizan un trabajo
// en específico, pueden recibir argumentos, los procesan
// y hacen el return, y que no hace falta que dibujen el state

export const getGifs = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(categoria) }&api_key=JHNpNgcZyTopLGERHL0R7WclmbogK4OG`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
        
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // console.log(gifs);
    return gifs;
}

/*
* El async regresa una pormesa que resuelve la colección de mis imgs
*/