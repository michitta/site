export default function getLangText(code: "ru" | "en", text: string) {
    const obj = {
        // Header
        Home: code == "ru" ? "Главная" : "Home",
        Projects: code == "ru" ? "Проекты": "Projects",
        SendMail: code == "ru" ?  "Отправить письмо" : "Send mail",

        // First section
        HelloText: code == "ru" ?  "Привет, я Михаил! 👋" : "Hello, I’m Michail! 👋",
        DeveloperText: code == "ru" ?  "Fullstack разработчик" : "Fullstack Developer",
        TechologiesText: code == "ru" ?  "Разработка веб-приложений с использованием следующих технологий" : "The development of web applications using the following technologies",
        ScrollText: code == "ru" ? "Посмотрите ниже, чтобы увидеть разработанные продукты" : "Scroll down to see the developed products",

        // Developed section
        DevelopedText: code == "ru" ?  "Разработанные продукты" : "Developed products",
        DevelopedDescription: code == "ru" ?  "В этой секции отображенны все продукты с которыми я работал" : "This section presents the projects that I have been working on.",
    }

    const key = Object.keys(obj).indexOf(text)
    return Object.values(obj)[key];
}