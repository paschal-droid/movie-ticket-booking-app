const API_KEY = '2b57b3f38dd0e9c8d435d21d7c146312'

const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
const upcomingMovies =  `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
export const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

 const movieSearch = (keyword) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`
}

 const movieDetails = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
}

 const movieCastDetails = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
}

export const baseImagePath = (size, path) => {
    return `https://image.tmdb.org/t/p/${size}${path}`
}



export const getNowPlayingMoviesList = async () => {
    try {
      let response = await fetch(nowPlayingMovies)
      let json = await response.json()
      return json
    } catch (error) {
      console.log(error, 'something went wrong in fetching the nowPlayingMovies list');
    }
  }
 export const getPopularMoviesList = async () => {
    try {
      let response = await fetch(popularMovies)
      let json = await response.json()
      return json
    } catch (error) {
      console.log(error, 'something went wrong in fetching the popularMovies list');
    }
  }
 export const getUpcomingMoviesList = async () => {
    try {
      let response = await fetch(upcomingMovies)
      let json = await response.json()
      return json
    } catch (error) {
      console.log(error, 'something went wrong in fetching the upcomingMovies list');
    }
  }

 export const getSearchQueryList = async (query) => {
    try {
      let response = await fetch(movieSearch(query))
      let json = await response.json()
      return json
    } catch (error) {
      console.log(error, 'something went in Searching for the keyword');
    }
  }

 export const getDetailsList = async (id) => {
    try {
      let movieDetailResponse = await fetch(movieDetails(id))
      let json = await movieDetailResponse.json()
      return json
    } catch (error) {
      console.log(error, 'something went in fetching the details for the keyword');
    }
  }
 export const getCastDetailsList = async (id) => {
    try {
      let movieCastDetailResponse = await fetch(movieCastDetails(id))
      let json = await movieCastDetailResponse.json()
      return json
    } catch (error) {
      console.log(error, 'something went in fetching the cast details for the keyword');
    }
  }
