'use client';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import ButtonComponent from '../Button/Button.component';

export default function Header() {
    const path = usePathname();

    return (
        <header className={styles.header}>
            <h1>michitta space ✨</h1>
            <div className={styles.buttons}>
                <nav className={styles.leftSection}>
                    <ButtonComponent href='/' active={path == "/"} className='header'>Главная</ButtonComponent>
                    <ButtonComponent href='/about' active={path == "/about"} className='header'>Навыки</ButtonComponent>
                    {/* <ButtonComponent href='/blog' active={path == "/blog"} className='header'>Блог</ButtonComponent> */}
                    <ButtonComponent href='/projects' active={path == "/projects"} className='header'>Проекты</ButtonComponent>
                </nav>
                <div className={styles.rightSection}>
                    <ButtonComponent href='mailto:kot.michail.ru@yandex.ru' className='header'>Написать на почту</ButtonComponent>
                    <ButtonComponent href='https://github.com/michitta' className='header'>GitHub</ButtonComponent>
                </div>
            </div>
        </header>
    )
}