import { FC, ReactNode } from "react";
import styles from "./Notice.module.scss";
import clsx from "clsx";
import { RiInformationLine, RiErrorWarningLine, RiCheckboxCircleLine, } from "@remixicon/react";

export const Warn: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={clsx(styles.default, styles.warn)}>
            <RiInformationLine size={24} />
            <p>{children}</p>
        </div>
    )
}

export const Error: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={clsx(styles.default, styles.error)}>
            <RiErrorWarningLine size={24} />
            <p>{children}</p>
        </div>
    )
}

export const Success: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={clsx(styles.default, styles.success)}>
            <RiCheckboxCircleLine size={24} />
            <p>{children}</p>
        </div>
    )
}