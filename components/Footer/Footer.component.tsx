import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftSection}>
                <p>Дизайн и разработка - michitta</p>
            </div>
            <div className={styles.rightSection}>
                <p>michitta-space.ru</p>
            </div>
        </footer>
    )
}