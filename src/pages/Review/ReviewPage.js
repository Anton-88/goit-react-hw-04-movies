import { useState, useEffect } from 'react';
import styles from './ReviewPage.module.css';
import ApiService from '../../apiService/apiService';
// import LoaderContainer from '../../components/LoaderContainer/LoaderContainer';
// import ImgUrl from '../../components/ImgUrl/ImgUlr';
import noImgFound from '../../img/noImgFound.jpg';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const ApiObj = new ApiService();

export default function ReviewsPage({ movieId }) {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);

        try {
            const res = await ApiObj.fetchMovieReviews(movieId);
            setReviews(res.data.results);
        } catch (err) {
            console.log('err', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            {reviews.length !== 0 ? (
                <ul className={styles.list}>
                    {reviews.map(e => (
                        <li className={styles.item} key={e.id}>
                            <div>
                                <img
                                    src={
                                        e.author_details.avatar_path === null
                                            || e.author_details.avatar_path.includes('gravatar')
                                            ? noImgFound
                                            : `https://image.tmdb.org/t/p/w500${e.author_details.avatar_path}`
                                    }
                                    alt={e.author}
                                    width={100}
                                />
                                <p className={styles.auth}>{e.author}</p>
                            </div>
                            <p className={styles.content}>{e.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.empty}>It's empty here</p>
            )}
        </>
    );
}