import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePathToDelete = path.join(dirname, "files", "fileToRemove.txt");

  try {
    await fs.rm(filePathToDelete);
    console.log("File deleted successfully");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
