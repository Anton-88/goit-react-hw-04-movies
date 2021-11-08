import { useEffect, useState } from "react";
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import ApiService from "../../apiService/apiService";
import styles from './MoviesPage.module.css'
import queryString from 'query-string'
import SearchBar from "../../components/SearchBar/searchBar";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function MoviesPage() {
    const location = useLocation();
    const history = useHistory();

    const { query } = queryString.parse(location.search)
    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState(query || '');

    const ApiObj = new ApiService();

    useEffect(() => {
        if (!searchQuery)
            return;
        getMovies();
    }, [searchQuery])

    const getMovies = async () => {
        try {
            ApiObj.searchQuery = query;
            const res = await ApiObj.fetchMoviesByRequest(searchQuery);
            if (res) {
                setMovies(prev => [...prev, ...res.data.results]);
            }
        } catch (err) {
            console.log(`err`, err)
        }
    }

    const onChangeQuery = (query) => {
        setMovies([]);
        setSearchQuery(query);
        history.push({
            ...location,
            search: `query=${query}`,
        });
    };

    return (
        <>
            <SearchBar handleSearchChange={onChangeQuery} />
            <MoviesList movies={movies} location={location} />
        </>
    )
}
