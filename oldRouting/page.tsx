import Index from "./index.mdx";
import styles from "./page.module.scss"

export default function Page() {
    return (
        <main className={styles.page}>
            <Index />
        </main>
    )
}