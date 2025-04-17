const http = require("http");
const fs = require("fs");

const app = http
  .createServer(function (request, response) {
    if (request.url === "/") {
      fs.readFile("index.html", function (err, data) {
        if (err) {
          response.end(err);
        } else {
          response.writeHead(200, { "content-Type": "text/html" });
          response.write(data);
          return response.end();
        }
      });
    }

    if(request.url === "/create-directory" && request.method === "POST"){
        fs.mkdir("content", function(err){
            if(err){
                response.writableLength(err)
            }else{
                response.end("content folder created")
            }
        })
    }

    if(request.url === "/create-text" && request.method === "POST"){
      fs.writeFile("randomText.txt", "This is some real random text.", function(err){
          if(err){
              response.writableLength(err)
          }else{
              response.end("randomText.txt created")
          }
      })
    }

    if(request.url === "/new-folder-and-file" && request.method === "POST"){
      let body = "";
      fs.readFile("randomText.txt", function (err, data) {
        if (err) {
          response.end(err);
        } else {
          body += data.toString();
          fs.writeFile("./content/verbage.txt", body, function(err){
          if(err){
              response.writableLength(err)
          }else{
              response.end("verbage.txt created")
              setTimeout(function() {
                fs.unlinkSync('./content/verbage.txt');
                fs.rmdir('./content', function(err){
                  if(err){
                    response.writableLength(err)
                  }else{
                    response.end("content directory deleted")
                  }
                })
              }, 7000)
          }
      })
        }
      });
    }
  })

  .listen(3000, function () {
    console.log("Server Started!!!");
  });

module.exports = app;