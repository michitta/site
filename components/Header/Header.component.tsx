'use client';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import Link from 'next/link';
import ButtonComponent from '../Button/Button.component';

export default function () {
    const path = usePathname();

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <h1>michitta space</h1>
                <nav className={styles.navBar}>
                    <ButtonComponent href='/' active={path == "/"} className='header'>Главная</ButtonComponent>
                    <ButtonComponent href='/about' active={path == "/about"} className='header'>Кто я</ButtonComponent>
                    <ButtonComponent href='/blog' active={path == "/blog"} className='header'>Блог</ButtonComponent>
                    <ButtonComponent href='/projects' active={path == "/projects"} className='header'>Проекты</ButtonComponent>
                </nav>
            </div>
            <ButtonComponent href='https://github.com/michitta' className='header'>GitHub</ButtonComponent>
        </header >
    )
}