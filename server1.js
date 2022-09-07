const http = require('http'); 
const uc = require('upper-case')
const server = http.createServer((req,res)=>
{
  res.write(uc.upperCase("Hello "))
  res.end("This is the last statement")
})

const PORT = process.env.PORT | 9000
server.listen(PORT, 'localhost', ()=>
{
  console.log("Server is listening ")
})