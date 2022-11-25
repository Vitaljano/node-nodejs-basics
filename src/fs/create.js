import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const filePath = path.join(__dirname, "files", "fresh.txt");
  const isFileExistsFunc = async () => {
    try {
      await fs.access(filePath);
      return true;
    } catch (err) {
      return false;
    }
  };
  const isFileExists = await isFileExistsFunc();

  if (isFileExists) {
    throw new Error("FS operation failed");
  }
  await fs.writeFile(filePath, "I am fresh and young");
};

await create();
