import { useState, useEffect } from 'react';
// import { fetchCast } from '../../service/movieDb';
import Loader from '../../components/Loader/Loader';
// import def from '../../img/defCast.png';
import styles from './CastPage.module.css';
import ApiService from '../../apiService/apiService';
import noImgFound from '../../img/noImgFound.jpg';
import PropTypes from 'prop-types';

export default function Cast({ movieId }) {
    const [auth, setAuth] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const ApiObj = new ApiService();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await ApiObj.fetchMovieCast(movieId);
            setAuth(res.data);
        } catch (error) {
            console.log('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            {auth && (
                <ul className={styles.list}>
                    {auth.cast.map(e => (
                        <li className={styles.item} key={e.name}>
                            <img
                                className={styles.img}
                                src={
                                    e.profile_path === null
                                        ? noImgFound
                                        : `https://image.tmdb.org/t/p/w500${e.profile_path}`
                                }
                                alt={e.name}
                            // width={150}
                            />
                            <p>{e.name}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}