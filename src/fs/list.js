import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const list = async () => {
  try {
    const dirPath = path.join(
      path.dirname(fileURLToPath(import.meta.url)),
      "files"
    );

    const files = await fs.readdir(dirPath);
    files.forEach((file) => console.log(file));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
