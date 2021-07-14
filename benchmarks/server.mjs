import { Worker, isMainThread } from "worker_threads";
import { cpus } from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pkg from "uWebSockets.js";
import { readFile } from "fs/promises";

process.env.UV_THREADPOOL_SIZE = cpus().length;

const { App: createServer } = pkg;
// @ts-expect-error: the file is running as a module, import.meta is allowed
const largeData = (await readFile(`${dirname(fileURLToPath(import.meta.url))}/large.txt`)).toString();
const __filename = fileURLToPath(import.meta.url);

if (isMainThread) cpus().forEach(() => {
	// eslint-disable-next-line no-new
	new Worker(__filename);
});
else createServer()
	.get("/ok", (res) => {
		res.writeStatus("200");
		res.writeHeader("Content-Type", "text/plain");
		res.end("ok");
	})
	.get("/large", (res) => {
		res.writeStatus("200");
		res.writeHeader("Content-Type", "text/plain");
		res.end(largeData);
	})
	.get("/*", (res) => {
		res.writeStatus("200");
		res.end();
	})
	.listen("127.0.0.1", 8080, (token) => console.log(token, " Awaiting requests."));
