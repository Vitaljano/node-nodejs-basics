import { Worker } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import { stat } from "fs";

const performCalculations = async () => {
  const scriptPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "worker.js"
  );
  const cores = os.cpus().length;
  const workerArr = [];
  const n = 10;

  for (let i = 0; i < cores; i++) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker(scriptPath, { workerData: n + i });
      worker.on("message", (msg) => {
        const result = { status: "resolved", data: msg };
        resolve(result);
      });
      worker.on("error", (err) => {
        const result = { status: "error", data: null };
        reject(result);
      });
    });
    workerArr.push(workerPromise);
  }

  const responseArr = await Promise.allSettled(workerArr);

  for (const response of responseArr) {
    console.log(response.value);
  }
};

await performCalculations();
