const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const {execFile} = require('node:child_process');
const root = path.resolve(__dirname,'dist');
const mime = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.zip':'application/zip'};
const server = http.createServer((req,res)=>{
  const pathname = new URL(req.url,'http://localhost').pathname;
  const file = path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return}
  fs.readFile(file,(err,bytes)=>{
    if(err){res.writeHead(404).end();return}
    res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'}).end(bytes);
  });
});
server.on('error',e=>{console.error(e.message);process.exitCode=1});
server.listen(4178,'127.0.0.1',()=>{
  const url='http://127.0.0.1:4178';
  console.log('AJ Videos is running at '+url+' . Press Ctrl+C to stop.');
  if(process.platform==='win32')execFile('rundll32.exe',['url.dll,FileProtocolHandler',url]);
});
