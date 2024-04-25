import { TagHintColor } from "@/enums";
import styles from "./Hint.module.scss";
import { FC } from "react";


function getText(color: TagHintColor) {
    switch (color) {
        case TagHintColor.GREEN:
            return "Уверенное владение"
        case TagHintColor.YELLOW:
            return "Мало работал, но есть понимание"
        case TagHintColor.ORANGE:
            return "СПО"
        case TagHintColor.BLUE:
            return "ВО"
    }
}

const HintComponent: FC<{ color: TagHintColor }> = ({ color }) => {
    return (
        <div key={"hint_" + color} className={styles.hint}>
            <div className={color} />
            <p>{getText(color)}</p>
        </div>
    )
}

export default HintComponent