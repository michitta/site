import Image from "next/image";

export default function EffectiveComponent () {
    return (
        <div className="absolute w-full h-full top-0 left-0 items-start justify-center flex -z-10">
            <Image src={"/bg.webp"} className="w-full dark:invert-0 max-2xl:object-cover invert-100 object-none w-[1920px] h-[1200px]" width={1920} height={1200} alt="sex" quality={100}/>
        </div>
    )
}