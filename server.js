import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();
app.use(express.static('dist/client/'))
app.use(ssrHandler);

console.log("Web Server Started Listen On 0.0.0.0:80")
app.listen(80);
