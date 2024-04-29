import { getReactNode } from "@/next.dynamic";
import { FC } from "react"
import NotFound from "../not-found";

const Page: FC<{ params: { page: string[] } }> = async ({ params }) => {
    // Получаем патч
    const path = params?.page ? params?.page?.join("/") : "index";

    // Достаём Node
    const ReactMDXNode = await getReactNode(path);

    return (
        <main className="main">
            <div className="content">
                {
                    ReactMDXNode ?
                        <ReactMDXNode /> :
                        <NotFound />
                }
            </div>
        </main>
    )
}

export default Page