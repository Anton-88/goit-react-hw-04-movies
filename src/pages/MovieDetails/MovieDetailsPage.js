import { useState, useEffect, lazy } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation, useParams } from 'react-router';
// import { fetchDetailsPage } from '../../service/movieDb';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
import MovieCastAndReview from '../../components/MovieCastAndReview/MovieCastAndReview'
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import ApiService from '../../apiService/apiService';

const CastPage = lazy(() => import('../Cast/CastPage'));
const ReviewsPage = lazy(() => import('../Review/ReviewPage'));

const ApiObj = new ApiService();

export default function MoviesDetailsPage() {
    const history = useHistory();
    const location = useLocation();
    const [movieInfo, setMovieInfo] = useState(null);
    const { movieId } = useParams();
    const { url } = useRouteMatch();

    const handleBackClick = () => {
        history.push(location?.state?.from ?? '/');
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await ApiObj.fetchMovieDetails(movieId);
            setMovieInfo(res.data);
        } catch (err) {
            console.log('err', err);
        }
    };

    return (
        <>
            <ButtonBack handleBackClick={handleBackClick} location={location} />
            {
                movieInfo && (
                    <div>
                        <MovieDescription movieInfo={movieInfo} />
                        <MovieCastAndReview url={url} location={location} />

                        <Route path={`${url}/cast`}>
                            {movieInfo && <CastPage movieId={movieId} />}
                        </Route>
                        <Route path={`${url}/reviews`}>
                            {movieInfo && <ReviewsPage movieId={movieId} />}
                        </Route>
                    </div>
                )
            }
        </>
    );
}

