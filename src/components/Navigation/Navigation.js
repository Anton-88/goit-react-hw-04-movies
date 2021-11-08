import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        exact
                        to="/"
                        className="navLink"
                        activeClassName="activeNavLink"
                    >
                        HomePage
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to="/movies"
                        className="navLink"
                        activeClassName="activeNavLink"
                    >
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
