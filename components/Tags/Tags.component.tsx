import styles from "./Tags.module.scss";
import { FC } from "react";
import { skill } from "@/types";
import clsx from "clsx";

const TagsComponent: FC<{ obj: skill[] }> = ({ obj }) => {
    return (
        <div className={styles.tags}>
            {obj.map((tag) => (
                <div
                    key={tag.name}
                    className={clsx(styles.tag, tag.color || "green")}
                >
                    {tag.name}
                </div>
            ))}
        </div>
    )
}

export default TagsComponent