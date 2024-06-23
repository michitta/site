import { ReactNode } from 'react';
import styles from './Button.module.scss'
import Link from 'next/link';
import clsx from 'clsx';

export default async function Button({ href, active, className, children }: { href: string; active?: boolean, className?: string; children?: ReactNode }) {

    const style = className ? styles?.[className] : styles.default;
    const name = active ? clsx(style, styles.active) : style;

    return (
        <Link className={name} href={href}>
            {children}
        </Link>
    )
}