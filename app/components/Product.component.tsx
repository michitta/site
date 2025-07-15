import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function ProductComponent({ time, title, description, icons, links, image }: { time: string, title: string, description: ReactNode, icons: string[], links?: { figma?: string, site?: string, github?: string }, image: string }) {
    return (
        <div className="max-2xl:flex-col-reverse text-start flex gap-4 w-full justify-between p-4 rounded-3xl dark:bg-1-t bg-1-t-w border dark:border-label-5 border-label-5-w">
            <div className="flex flex-col gap-4">
                <p className="font-bold text-sm dark:text-label-2 text-label-2-w">{time}</p>
                <div className="flex flex-wrap gap-2">
                    {icons.map((icon, key) => <Image key={icon + "_" + key} src={"/icons/" + icon + ".svg"} width={20} height={20} alt="icon"/>)}
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl dark:text-white text-black">
                        {title}
                    </h1>
                    {description}
                </div>
                <div className="flex gap-2">
                    {links?.site && <Link className="link" href={links?.site}>Сайт</Link>}
                    {links?.github && <Link className="link" href={links?.github}>GitHub</Link>}
                    {links?.figma && <Link className="link" href={links?.figma}>Figma</Link>}
                </div>
            </div>
            <Image alt="image" className="max-2xl:w-full max-2xl:max-h-40 max-2xl:object-cover object-none rounded-xl border dark:border-label-5 border-label-5-w" src={image} width={480} height={320} />
        </div>
    )
}