"use client";

import { NavigationArrowIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NoticeComponent() {
  return (
    <motion.div
      initial={{ scale: 0, top: -20 }}
      animate={{ scale: 1, top: "88px" }}
      exit={{ scale: 0, top: -20 }}
      className="absolute max-md:top-32! top-22 items-center flex gap-3 px-3 py-2 rounded-2xl dark:bg-1-t bg-1-t-w border dark:border-label-5 border-label-5-w backdrop-blur-2xl"
    >
      <NavigationArrowIcon className="dark:fill-white fill-black" size={16} />
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold max-md:text-xs text-sm dark:text-white text-black">
          It looks like you may be using a VPN or are located in another
          country,
          <br />
          so the site has automatically translated into English for your
          convenience!
        </h2>
        <p className="font-semibold max-md:text-xs text-sm dark:text-label-2 text-label-2-w">
          Information is provided by cloudflare.{" "}
          <Link
            className="link"
            href="https://developers.cloudflare.com/fundamentals/reference/http-headers/"
          >
            Learn more
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
