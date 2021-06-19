
import cluster from "cluster";
import { cpus } from "os";
import { createServer } from "http";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

// @ts-expect-error: the file is running as a module, import.meta is allowed
const largeData = (await readFile(`${dirname(fileURLToPath(import.meta.url))}/large.txt`)).toString();
const workers = parseInt(process.env.WORKERS, 10) || cpus().length;

function requestHandler(req, res) {
	switch (req.url) {
		case "/ok": {
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.end("ok");
			return;
		}
		case "/large": {
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.end(largeData);
			return;
		}
		default: {
			res.end("No benchmark specified.");
		}
	}
}

// eslint-disable-next-line no-plusplus
if (cluster.isPrimary) for (let ii = 0; ii < workers; ++ii) cluster.fork();
else {
	const server = createServer(requestHandler).listen(8080, () => console.log("Awaiting requests."));
	server.keepAliveTimeout = 600e3;
}
