import axios from "axios";

export default class ApiService {
  constructor() {
    this.URL = 'https://api.themoviedb.org/3/';
    this.key = 'd2c006137cd7ecf5a4992b15f008fb35';
    this._searchQuery = "";
    this._page = 1;
    this._perPage = 12;
  }

  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }

  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page = value);
  }

  get perPage() {
    return this._perPage;
  }
  set perPage(value) {
    return (this._perPage = value);
  }

  resetPage() {
    return (this._page = 1);
  }

  incPageNumber() {
    this._page += 1;
  }

  async fetchTrendingMovies() {
    // const query = `${this.URL}?api_key=${this.key}`;
    // const query = 'https://api.themoviedb.org/3/movie/popular?api_key=d2c006137cd7ecf5a4992b15f008fb35';
    const query = `${this.URL}trending/movie/day?api_key=${this.key}`;
    try {
      const result = await axios.get(query);
      return result;
    } catch (err) {
      return err;
    }

  }

  async fetchMoviesByRequest(searchQuery) {
    const query = `${this.URL}search/movie?api_key=${this.key}&query=${searchQuery}&language=en-US`;
    try {
      const result = await axios.get(query);
      return result;
    } catch (err) {
      return err;
    }
  }

  async fetchMovieDetails(id) {
    const query = `${this.URL}movie/${id}?api_key=${this.key}&language=en-US`;
    try {
      const result = await axios.get(query);
      return result;
    } catch (err) {
      return err;
    }
  }

  async fetchMovieCast(id) {
    const query = `${this.URL}movie/${id}/credits?api_key=${this.key}&language=en-US`;
    try {
      const result = await axios.get(query);
      return result;
    } catch (err) {
      return err;
    }
  }

  async fetchMovieReviews(id) {
    const query = `${this.URL}movie/${id}/reviews?api_key=${this.key}&page=1&language=en-US`;
    try {
      const result = await axios.get(query);
      return result;
    } catch (err) {
      return err;
    }
  }

}