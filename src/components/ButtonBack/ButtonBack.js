import styles from './ButtonBack.module.css'

export default function ButtonBack({ handleBackClick, location }) {
    return (
        <>
            <button type="button" onClick={handleBackClick} className={styles.button_back}>
                {location?.state?.label ?? 'Go back'}
            </button>
        </>
    );
}