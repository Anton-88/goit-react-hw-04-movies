import { NavLink } from 'react-router-dom';
import styles from './MoviesList.module.css';
// import ImgUrl from '../ImgUrl/ImgUlr';
import noImgFound from '../../img/noImgFound.jpg';
import PropTypes from 'prop-types';

export default function MoviesList({ movies, location }) {
    return (
        <>
            <ul className={styles.list}>
                {movies.map(({ original_title, id, poster_path }) => (
                    <li key={id} className={styles.item}>
                        <NavLink
                            className={styles.link}
                            key={id}
                            to={{
                                pathname: `/movies/${id}`,
                                state: { from: location, label: 'Go to list' },
                            }}
                        >
                            <img
                                className={styles.img}
                                src={poster_path !== null ? `https://image.tmdb.org/t/p/w500${poster_path}` : noImgFound}
                                alt={original_title}
                                width={150}
                            />
                            <p className={styles.p}>{original_title}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}