"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams }  from 'next/navigation';
import Link from "next/link";
import clsx from "clsx";

export default function HeaderComponent() {
    const router = useRouter();
    const searchParams = useSearchParams()

    const [hash, setHash] = useState(typeof location !== 'undefined' ? location.hash : '');
    
    const [className, setClassName] = useState({
        transform: `translateX(0px)`,
        width: `100%`,
        height: `40px`,
        top: "4px"
    });

    const sliderButtons = [
        {
            label: "Home",
            id: "#Home",
        },
        {
            label: "Projects",
            id: "#Projects",
        }
    ];

    const [tab, setTab] = useState(0);

    const tabRefs = useRef<(HTMLButtonElement | null)[]>(
        new Array(sliderButtons.length).fill(null)
    );

    const setTabRef =
        (index: number) =>
        (el: HTMLButtonElement | null): void => {
            tabRefs.current[index] = el;
    };

    useEffect(() => {
        if (!location.hash) return;
        setHash(location.hash)
    }, [searchParams]);


    useEffect(() => {
        const pos =
            hash == "#Projects"
                ? 1 : 0

        setTab(pos);
    }, [hash])

    useEffect(() => {
        const activeTabElement = tabRefs.current[tab];
        if (!activeTabElement) return;
        const { offsetLeft, offsetWidth, offsetHeight } = activeTabElement;
        setClassName({
            transform: `translateX(${offsetLeft}px)`,
            width: `${offsetWidth}px`,
            height: `${offsetHeight}px`,
            top: "4px"
        });
    }, [tab]);


    return (
        <header className="fixed flex w-full px-8 items-center z-10">
            <section className="flex flex-1">
                <p className="dark:text-white text-black text-xl font-bold">michitta's space ✨</p>
            </section>
            <section className="flex p-1 rounded-full dark:bg-1-t bg-1-t-w border dark:border-label-5 border-label-5-w backdrop-blur-2xl">
                <motion.div animate={className} className="w-full h-full top-0 left-0 absolute dark:bg-3-t bg-3-t-w rounded-4xl border dark:border-label-5 border-label-5-w" />
                {sliderButtons.map(
                    (sliderButton, index) =>
                        <button
                            key={index}
                            ref={setTabRef(index)}
                            onClick={() => router.push(sliderButton.id)}
                            className="flex px-3 py-2 rounded-full dark:text-white text-black z-10"
                        >
                            {sliderButton.label}
                        </button>
                )}
            </section>
            <section className="flex flex-1 justify-end text-sm font-semibold dark:text-white text-black">
                <Link className="button" href="mailto:kot.michail.ru@yandex.ru">
                    Send mail
                </Link>
                <Link className="button" href="https://t.me/michitto">
                    Telegram
                </Link>
                <Link className="button" href="https://github.com/michitta">
                    GitHub
                </Link>
            </section>
        </header>
    )
}