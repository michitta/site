'use client';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import Link from 'next/link';

export default function () {
    const path = usePathname();

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <h1>michitta space</h1>
                <nav className={styles.navBar}>
                    <Link href={'/'} className={path === '/' ? styles.active : ''}>Главная</Link>
                    <Link href={'/about'} className={path === '/about' ? styles.active : ''}>Обо мне</Link>
                    <Link href={'/blog'} className={path === '/blog' ? styles.active : ''}>Блог</Link>
                    {/* <Link href={'/projects'} className={path === '/projects' ? styles.active : ''}>Проекты</Link> */}
                    <Link href={'https://github.com/michitta'} className="after:content-['_↗']">GitHub</Link>
                </nav>
            </div>
            <p>Тема привязана к твоему ПК! 😊</p>
        </header >
    )
}