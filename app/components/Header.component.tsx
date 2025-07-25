"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { langTextType } from "../types/global.types";
import useNav from "../hooks/nav.hook";

export default function HeaderComponent({
    langText,
}: {
    langText: langTextType;
}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    useNav();

    // const [popupActive, setPopupActive] = useState(false);

    const [hash, setHash] = useState(
        typeof location !== "undefined" ? location.hash : ""
    );

    const [className, setClassName] = useState({
        transform: `translateX(0px)`,
        width: `100%`,
        height: `40px`,
        top: "4px",
    });

    const sliderButtons = [
        {
            label: langText.Home,
            id: "#Home",
        },
        {
            label: langText.Projects,
            id: "#Projects",
        },
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
        setHash(location.hash);
    }, [searchParams]);

    useEffect(() => {
        const pos = hash == "#Projects" ? 1 : 0;

        setTab(pos);
    }, [hash]);

    useEffect(() => {
        const activeTabElement = tabRefs.current[tab];
        if (!activeTabElement) return;
        const { offsetLeft, offsetWidth, offsetHeight } = activeTabElement;
        setClassName({
            transform: `translateX(${offsetLeft}px)`,
            width: `${offsetWidth}px`,
            height: `${offsetHeight}px`,
            top: "4px",
        });
    }, [tab]);

    // const dropDownMenuRef = useRef(null);
    // const buttonRef = useRef(null);

    // useEffect(() => {
    //     const handleClickOutside = (e: MouseEvent) => {
    //         const { current: menu } = dropDownMenuRef;
    //         const { current: button } = buttonRef;

    //         if (
    //             menu &&
    //             button &&
    //             !(menu as any).contains(e.target) &&
    //             e.target !== button &&
    //             !(button as any).contains(e.target)
    //         ) {
    //             setPopupActive(false);
    //         }
    //     };

    //     const handleScroll = (e: Event) => {
    //         console.log(e)
    //         // document.addEventListener('scroll', () => {
    //         //     if (window.pageYOffset < 150) {
    //         //         history.replaceState(null, null, window.location.pathname);
    //         //         setHash('')
    //         //     }
    //         // })
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside)
    //     };
    // }, []);

    return (
        <header className="fixed flex max-md:flex-col max-md:gap-3 w-full max-md:px-2 py-5 px-8 items-center z-10 bg-gradient-to-b from-black to-transparent">
            <section className="flex flex-1">
                <p className="dark:text-white text-black text-xl font-bold">
                    michitta's space ✨
                </p>
            </section>
            <section className="max-md:hidden flex p-1 rounded-full dark:bg-1-t bg-1-t-w border dark:border-label-5 border-label-5-w backdrop-blur-2xl">
                <motion.div
                    animate={className}
                    className="w-full h-full top-0 left-0 absolute dark:bg-3-t bg-3-t-w rounded-4xl border dark:border-label-5 border-label-5-w"
                />
                {sliderButtons.map((sliderButton, index) => (
                    <button
                        key={index}
                        ref={setTabRef(index)}
                        onClick={() => router.push(sliderButton.id)}
                        className="flex px-3 py-2 rounded-full dark:text-white text-black z-10"
                    >
                        {sliderButton.label}
                    </button>
                ))}
            </section>
            <section className="relative flex flex-1 justify-end text-sm font-semibold dark:text-white text-black">
                <Link
                    className="button"
                    href="https://status.michitta-space.ru/status/services"
                >
                    {langText.Statuses}
                </Link>
                <Link className="button" href="mailto:kot.michail.ru@yandex.ru">
                    {langText.SendMail}
                </Link>
                <Link className="button" href="https://t.me/michitto">
                    Telegram
                </Link>
                <Link className="button" href="https://github.com/michitta">
                    GitHub
                </Link>
                {/* TODO: Нужно допилить эту часть кода после релиза. Future drop так сказать */}
                {/* <button ref={buttonRef} onClick={() => setPopupActive(state => !state)} className="button cursor-pointer flex gap-1.5 items-center">
                    EN <CaretDownIcon size={12} />
                </button> */}
                {/* <AnimatePresence>
                    {popupActive &&
                        <motion.div
                            ref={dropDownMenuRef}
                            initial={{ opacity: 0, y: -20, scale: 0 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0 }}
                            className="absolute top-10 flex p-2 dark:bg-1-t bg-1-t-w border dark:border-label-5 border-label-5-w rounded-xl backdrop-blur-2xl">
                            Русский<br />
                            English
                        </motion.div>
                    }
                </AnimatePresence> */}
            </section>
        </header>
    );
}
