import { headers } from "next/headers";

export default async function useLangText() {
    const headersList = await headers();

    let code = headersList.get('cf-ipcountry') == 'RU' ? "ru" : "en"

    return {
        code,
        langText: {
            Home: code == "ru" ? "Главная" : "Home",
            Projects: code == "ru" ? "Проекты": "Projects",
            SendMail: code == "ru" ?  "Отправить письмо" : "Send mail",

            // First section
            HelloText: code == "ru" ?  "Привет, я Михаил! 👋" : "Hello, I’m Michail! 👋",
            DeveloperText: code == "ru" ?  "Fullstack разработчик" : "Fullstack Developer",
            TechologiesText: code == "ru" ?  "Разработка веб-приложений с использованием следующих технологий:" : "The development of web applications using the following technologies",
            ScrollText: code == "ru" ? "Прокрутите страницу вниз, чтобы увидеть список разработанных продуктов" : "Scroll down to see the developed products",

            // Developed section
            DevelopedText: code == "ru" ?  "Разработанные продукты" : "Developed products",
            DevelopedDescription: code == "ru" ?  "В этой секции представлены все продукты, разработанные мной" : "This section presents the projects that I have been working on.",
        }
    };
}