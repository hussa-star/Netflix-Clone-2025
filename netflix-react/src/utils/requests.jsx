const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=2`,
  fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en`,
};

export default requests;
// https://api.themoviedb.org/3/discover/tv?api_key=71c346b0d108e15805244ad77ef6c059&with_networks=213&page=2


// https://image.tmdb.org/t/p/original/1FxG2lmDYsCM1svJf7H79HNNwu2.jpg