import styles from './MovieDescription.module.css'

export default function MovieDescription({ movieInfo }) {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    {movieInfo.original_title} ({movieInfo.release_date.substring(0, 4)})
                </h1>
                <h4>User score: {movieInfo.vote_average * 10}%</h4>
                <h3 className={styles.secondaryTitle}>Overview</h3>
                <p className={styles.overview}>{movieInfo.overview}</p>
                <h3 className={styles.secondaryTitle}>Genres</h3>
                <ul className={styles.list}>
                    {movieInfo.genres.map(e => (
                        <li className={styles.item} key={e.name}>
                            {e.name}
                        </li>
                    ))}
                </ul>
            </div>
            <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                alt={movieInfo.original_title}
                width={300}
            />
        </div>
    );
}