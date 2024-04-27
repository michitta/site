import { getMDXPath } from "@/next.dynamic";
import { FC } from "react"
import dynamic from "next/dynamic";
import NotFound from "../not-found";

const Page: FC<{ params: { page: string[] } }> = async ({ params }) => {
    // Получаем патч
    const path = params?.page ? params?.page?.join("/") : "index";

    // Получаем контент
    const file = await getMDXPath(path?.replaceAll('\\', '/'));

    // Импортируем MDXComponent
    const DynamicMDXComponent = dynamic(async () => await import("../../mdx/" + file));

    return (
        <main className="main">
            {
                file ?
                    <DynamicMDXComponent /> :
                    <NotFound />
            }
        </main>
    )
}

export default Page