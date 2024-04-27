import { existsSync } from "node:fs";
import { glob } from "glob";
import { join, sep } from "node:path";

// Была хорошая разработка, но ггвп

export const cachedMardownFiles = new Map();

export const getMDXRoutes = async () => {
  const whiteList = ["index.md", "index.mdx"];
  // Создаём Map, который будет жёстко хавать путь к файлу и название файла
  const files = await glob("**/*.{md,mdx}", {
    root: process.cwd(),
    cwd: "mdx",
    posix: true,
  });

  files.forEach(async (fileName) => {
    let pathName = fileName.replace(/.(mdx|md)?$/i, "");
    if (!whiteList.includes(fileName))
      pathName = fileName.replace(/((\/)?(index))?\.(mdx|md)?$/i, "");

    if (pathName.length > 1 && pathName.endsWith(sep)) {
      pathName = pathName.substring(0, pathName.length - 1);
    }

    let filePath = join(process.cwd(), "mdx", fileName);

    if (existsSync(filePath)) {
      cachedMardownFiles.set(pathName, filePath);
    }
  });
};

export const getMDXPath = async (pathName: string) => {
  if (cachedMardownFiles.size == 0) await getMDXRoutes();
  return cachedMardownFiles.get(pathName);
};

// Old version

// export const getMDXRoutes = async () => {
//   const whiteList = ["index.md", "index.mdx"];
//   // Создаём Map, который будет жёстко хавать путь к файлу и название файла
//   const files = await glob("**/*.{md,mdx}", {
//     root: process.cwd(),
//     cwd: "pages",
//     posix: true,
//   });

//   files.forEach(async (fileName) => {
//     let pathName = fileName.replace(/.(mdx|md)?$/i, "");
//     if (!whiteList.includes(fileName))
//       pathName = fileName.replace(/((\/)?(index))?\.(mdx|md)?$/i, "");

//     if (pathName.length > 1 && pathName.endsWith(sep)) {
//       pathName = pathName.substring(0, pathName.length - 1);
//     }

//     let filePath = join(process.cwd(), "pages", fileName);

//     if (existsSync(filePath)) {
//       const content = await readFile(filePath, "utf8");
//       cachedMardownFiles.set(pathName, content);
//     }
//   });
// };
