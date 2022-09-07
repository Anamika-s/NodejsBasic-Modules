const fs = require('fs')

fs.writeFileSync('test.txt' ,"This is a new file")

fs.appendFileSync('test.txt' ,"\nThis is a new line added")

fs.writeFile('file2.txt', 'This is a new file', (err,data)=>
{
  console.log("Data Added")
})

var data = fs.readFileSync('test.txt')
console.log(data.toString())


fs.readFile('file2.txt', 'utf-8', (error,data)=>
{
  console.log(error,data)
})

console.log("Finished Reading")