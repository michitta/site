import { getMDXPath } from "@/next.dynamic";
import { FC } from "react"
import dynamic from "next/dynamic";

const DynamicMDXComponent = ({ path }: { path: string }) => {
    const MDXContent = dynamic(() => import(path));
    return <MDXContent />
}

const Page: FC<{ params: { page: string[] } }> = async ({ params }) => {
    console.log(params)
    const path = params?.page?.join("/");
    const file = await getMDXPath(path.replaceAll('\\', '/'));


    return (
        <main>
            <DynamicMDXComponent path={file} />
        </main>
    )
}

export default Page