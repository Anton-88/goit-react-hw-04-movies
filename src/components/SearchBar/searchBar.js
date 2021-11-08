import { useState } from "react"
import styles from './searchBar.module.css'

export default function SearchBar({ handleSearchChange }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        const { value } = e.currentTarget;
        setSearchQuery(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchQuery.trim() === '') {
            alert('Enter correct query');
            return;
        }
        handleSearchChange(searchQuery);
        setSearchQuery('');
    }


    return (
        <>
            <div className={styles.searchbar}>
                <form className={styles.searchForm} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className={styles.searchFormInput}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies ..."
                        value={searchQuery}
                        onChange={handleChange}
                    />
                    <button type="submit" className={styles.searchFormButton}>
                        <span className={styles.searchFormButtonLabel}>Search</span>
                    </button>

                </form>
            </div>
        </>
    )
}