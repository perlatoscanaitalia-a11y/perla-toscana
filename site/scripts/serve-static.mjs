import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const root = join(process.cwd(), 'dist');
const host = '127.0.0.1';
const port = Number(process.env.PORT || 4321);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml'
};

function resolvePath(url) {
  const cleanUrl = decodeURIComponent(url.split('?')[0]);
  const requested = normalize(join(root, cleanUrl));
  if (!requested.startsWith(root)) return join(root, '404.html');
  if (existsSync(requested) && statSync(requested).isFile()) return requested;
  const indexPath = join(requested, 'index.html');
  if (existsSync(indexPath)) return indexPath;
  return join(root, '404.html');
}

createServer((req, res) => {
  const filePath = resolvePath(req.url || '/');
  const status = filePath.endsWith('404.html') ? 404 : 200;
  res.writeHead(status, {
    'Content-Type': types[extname(filePath)] || 'application/octet-stream'
  });
  createReadStream(filePath).pipe(res);
}).listen(port, host, () => {
  console.log(`Perla Toscana preview running at http://${host}:${port}/`);
});
