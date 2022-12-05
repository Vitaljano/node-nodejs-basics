import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const scriptPath = path.join(dirname, "files", "script.js");

  const node = spawn("node", [scriptPath, args]);

  process.stdin.pipe(node.stdin);

  node.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  node.stderr.on("data", (data) => {
    console.log(`sdterr: ${data}`);
  });
  node.stdout.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });
  node.stdout.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

spawnChildProcess();
