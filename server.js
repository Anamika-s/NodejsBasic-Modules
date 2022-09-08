
var http = require('http')
var formidable = require('formidable')
var fs = require('fs')

const port = 3001
http.createServer((req,res)=>
{
    if(req.url=='/fileUpload')
    {
     
form =  formidable({uploadDir:'Uploads/'});
form.parse(req, (err, fields, files)=>
{
  console.log("inside form ")
     if(err) console.log("ERROR "  + err)
     else {
      console.log("UPLADED")
      let tempPath =  files.filename.filepath;
      console.log(tempPath)
      // console.log(files.filename)
      let newPath =  'Uploads/'+ files.filename.originalFilename
      console.log(newPath)

      fs.rename(tempPath, newPath , (err)=>
      {
        if (err) console.log(err)
        else 
        {
          res.write("uploaded in temp folder")
          res.end()
        }
      })

     }
})

    }
    else 
    {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(`<form action="fileUpload" method="post" enctype="multipart/form-data">`)
    res.write(`<input type="file" name="filename"/> <br/><br/>`)
    res.write(`<button type="submit"> Load File </button> </form>`)
    return res.end();
    }
}).listen(port,()=>
{
  console.log(`Server Started at ${port}`)
})