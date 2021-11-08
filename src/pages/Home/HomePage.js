import { useEffect, useState } from "react";
import { useLocation, NavLink } from 'react-router-dom';
import ApiService from "../../apiService/apiService";
import noImgFound from '../../img/noImgFound.jpg';
import styles from './HomePage.module.css'

const TrendingSearch = new ApiService();

export default function HomePage() {
    const [trendingM, setTrendingM] = useState([]);
    const location = useLocation();

    useEffect(() => {
        trendingMovies();
    }, []);

    const trendingMovies = async () => {
        try {
            const home = await TrendingSearch.fetchTrendingMovies();
            const homePageMovies = home.data.results;
            setTrendingM(homePageMovies);
        } catch (err) {
            console.log(`err`, err)
        }
    }

    return (
        <>
            <ul className={styles.movies_list}>
                {trendingM.map((movie) => {
                    return (
                        <li key={movie.id} className={styles.movies_item}>
                            <NavLink
                                className={styles.navLink}
                                to={{
                                    pathname: `movies/${movie.id}`,
                                    state: { from: location, label: `back to home` },
                                }}>
                                <img
                                    src={movie.poster_path !== null
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : noImgFound}
                                    alt={`${movie.title} poster`}
                                    className={styles.poster}
                                />
                                {movie.original_title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}
