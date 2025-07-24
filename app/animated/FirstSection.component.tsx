"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { langTextType } from "../types/global.types";

export default function FirstSection({ langText }: { langText: langTextType }) {
  const icons = [
    "ts",
    "js",
    "rust",
    "tauri",
    "react",
    "tailwindcss",
    "docker",
    "figma",
    "vite",
    "redux",
    "css",
    "html",
    "portainer",
    "redis",
    "git",
    "sass",
    "photoshop",
    "nextjs",
    "github",
    "postgresql",
    "electron",
    "socketio",
    "linux",
    "nginx",
    "nest",
    "bun",
  ];

  return (
    <motion.section
      id="FirstSection"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{
        duration: 0.5,
      }}
      className="max-sm:max-w-full max-w-7xl h-screen flex flex-col justify-between px-16 max-sm:px-1 py-56 max-sm:pt-64 max-sm:pb-14 scroll-m-20"
    >
      <div className="flex flex-col max-sm:gap-6 gap-12 items-center text-center">
        <div className="flex flex-col gap-4 items-center">
          <p className="font-bold max-lg:text-lg text-2xl dark:text-white text-black">
            {langText.HelloText}
          </p>
          <h1 className="font-bold max-sm:text-4xl max-2xl:text-5xl text-8xl text-transparent bg-clip-text bg-gradient-to-b dark:from-[#00000002] from-[#ffffff02] dark:to-white to-black">
            {langText.DeveloperText}
          </h1>
        </div>
        <h2 className="font-bold max-sm:text-sm max-lg:text-lg text-2xl text-transparent bg-clip-text bg-gradient-to-b dark:from-[#00000002] from-[#ffffff02] dark:to-white to-black">
          {langText.DevelopedDescription}
        </h2>
        <div className="flex justify-center flex-wrap gap-2.5 max-w-[536px]">
          {icons.map((icon, key) => (
            <Image
              width={32}
              height={32}
              alt={icon + "_icon"}
              className="max-sm:size-7"
              key={key}
              src={"/icons/" + icon + ".svg"}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <p className="font-bold dark:text-label-2 text-label-2-w text-sm">
          {langText.ScrollText}
        </p>
        <CaretDownIcon className="dark:fill-label-2 fill-label-2-w" size={16} />
      </div>
    </motion.section>
  );
}
