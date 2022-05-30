const fs = require("fs");
const { builtinModules } = require("module");
const path = require("path");

function indexPages(response, request, fileName, myDir) {
  console.log(myDir + fileName);
  const content = path.extname(fileName).slice(1);
  let contentType = "";
  switch (content) {
    case "html":
      contentType = "text/html";
      break;
    case "css":
      contentType = "text/css";
      break;
    case "js":
      contentType = "text/javascript";
      break;
    case "json":
      contentType = "application/json";
      break;
    case "ico":
      contentType = "image/ico";
      break;
    case "png":
      contentType = "image/png";
      break;
    case "jpg":
      contentType = "image/jpg";
      break;
  }
  console.log(contentType);
  fs.readFile(myDir + fileName, function (err, data) {
    response.writeHead(200, { "Content-Type": contentType });
    response.write(data);
    response.end();
  });
}

module.exports = indexPages;
