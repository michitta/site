import About from "./about.mdx"
import styles from "./page.module.scss"

export default function Page() {
    return (
        <main className={styles.page}>
            <About />
        </main>
    )
}