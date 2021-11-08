import { NavLink } from 'react-router-dom';
import styles from './MovieCastAndReview.module.css'

export default function MovieDetailsNav({ url, location }) {
    return (
        <>
            <h2 className={styles.title}>Additional information</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        to={{
                            pathname: `${url}/cast`,
                            state: { ...location.state },
                        }}
                        className="navLink"
                        activeClassName="activeNavLink"
                    >
                        Cast
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to={{
                            pathname: `${url}/reviews`,
                            state: { ...location.state },
                        }}
                        className="navLink"
                        activeClassName="activeNavLink"
                    >
                        Reviews
                    </NavLink>
                </li>
            </ul>
        </>
    );
}