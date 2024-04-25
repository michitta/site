import styles from "./page.module.scss";
import HintComponent from "@/components/Hint/Hint.component";
import { TagHintColor } from "@/enums";
import { backend, devops, educations, frontend, launguages } from "@/constus";
import TagsComponent from "@/components/Tags/Tags.component";

export default function () {
    return (
        <main className={styles.page}>
            <div className={styles.about}>
                <h1>Обо мне</h1>
                <p>
                    Привет, я michitta (псевдоним)! Я занимаюсь frontend-разработкой с
                    2021 года и обладаю широкими знаниями в областях веб-дизайна,
                    backend-разработки и devops.
                    <br />
                    <br />
                    Добро пожаловать в моё цифровое пространство, где я собрал свои
                    проекты, полезные ресурсы и веду блог, посвящённый моей
                    профессиональной деятельности. Загляните в блог или на страницу
                    проектов, чтобы увидеть проекты с открытым и закрытым исходным кодом!
                </p>
            </div>
            <div className={styles.skillList}>
                <h2>Мои навыки</h2>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <div className={styles.top}>
                            <p>Frontend</p>
                            <HintComponent color={TagHintColor.GREEN} />
                        </div>
                        <TagsComponent obj={frontend} />
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.top}>
                            <p>Backend</p>
                            <HintComponent color={TagHintColor.GREEN} />
                            <HintComponent color={TagHintColor.YELLOW} />
                        </div>
                        <TagsComponent obj={backend} />
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.top}>
                            <p>DevOps</p>
                            <HintComponent color={TagHintColor.GREEN} />
                        </div>
                        <TagsComponent obj={devops} />
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.top}>
                            <p>Языки программирования</p>
                            <HintComponent color={TagHintColor.GREEN} />
                            <HintComponent color={TagHintColor.YELLOW} />
                        </div>
                        <TagsComponent obj={launguages} />
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.top}>
                            <p>Образование</p>
                            <HintComponent color={TagHintColor.ORANGE} />
                            <HintComponent color={TagHintColor.BLUE} />
                        </div>
                        <TagsComponent obj={educations} />
                    </div>
                </div>
            </div>
        </main>
    );
}
