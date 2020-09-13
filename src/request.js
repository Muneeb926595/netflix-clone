const MY_API_KEY = "43d36cb59a141ee769f082a28ceea19d"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${MY_API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${MY_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${MY_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${MY_API_KEY}&with_genres=99`
}

export default requests;