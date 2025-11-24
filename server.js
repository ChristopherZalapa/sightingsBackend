import http from "node:http";
import { serveStatic } from "./Utils/serveStatic.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
	await serveStatic(req, res, __dirname);
});

server.listen(PORT, () => console.log(`Sever running on PORT: ${PORT}`));
