const http = require('http')
// Create Web Server

const server = http.createServer((req,res)=>
{res.setHeader('Content-Type','text/plain');
  res.end('This is repsosne from server')
})

const PORT = process.env.PORT | 9000
server.listen(PORT,'localhost' ,()=>
{
  console.log("Server has been started at port no $PORT at http://localhost:9000")
})