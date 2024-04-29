import { existsSync } from "node:fs";
import { glob } from "glob";
import { join, sep } from "node:path";
import dynamic from "next/dynamic";

export const cachedMardownFiles = new Map();
export const cachedReactNodes = new Map();

export const getMDXRoutes = async () => {
  // Нужное чудо, чтобы находить / при обращении на /
  const whiteList = ["index.md", "index.mdx"];

  // Создаём Map, который будет жёстко хавать путь к файлу и название файла
  const files = await glob("**/*.{md,mdx}", {
    root: process.cwd(),
    cwd: "mdx",
    posix: true,
  });

  // Проходимся по найденным файликам
  files.forEach(async (fileName) => {
    // А это pathName
    let pathName = fileName.replace(/.(mdx|md)?$/i, "");
    // Если файл не в списке whiteList, то используем другой regex
    if (!whiteList.includes(fileName))
      pathName = fileName.replace(/((\/)?(index))?\.(mdx|md)?$/i, "");

    // Модифицируем строчку
    if (pathName.length > 1 && pathName.endsWith(sep)) {
      pathName = pathName.substring(0, pathName.length - 1);
    }

    // Получаем путь к файлу
    let filePath = join(process.cwd(), "mdx", fileName);

    // Проверяем существование файлика
    if (existsSync(filePath)) {
      // Закидываем на сохранение в Map { pathName : ReactNode }
      cachedReactNodes.set(
        pathName,
        dynamic(async () => await import(`./mdx/${fileName}`))
      );
    }
  });
};

// Получаем Node. Если cachedReactNodes пустой, то начинаем getMDXRoutes
export const getReactNode = async (pathName: string) => {
  if (cachedReactNodes.size == 0) await getMDXRoutes();
  return cachedReactNodes.get(pathName);
};
