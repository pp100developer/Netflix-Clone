const key = "e68947114013b0f360978b2ebdf282f7";

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    fetchGenres: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
    fetchTopRated: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres-99`
}

export default requests;