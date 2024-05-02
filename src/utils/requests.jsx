const API_Key= process.env.REACT_APP_API_KEY;

const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_Key}&language=en-US&page=1`
};

export default requests;