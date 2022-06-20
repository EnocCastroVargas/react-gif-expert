
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=dYE14j8lkqSG8HFyLFGXC1XDge4aNj7i&q=${ category }&limit=10`;
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${ category }&limit=10`;

    const resp = await fetch(url);
    const {data} = await resp.json();


    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
};