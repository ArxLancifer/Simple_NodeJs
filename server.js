const http = require("http");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");
const indexPages = require("./pages/serversModules");
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  const myDir = __dirname;
  if (page == "/") {
    indexPages(res, req, "/index.html", myDir);
  } else if (page == "/otherpage") {
    indexPages(res, req, "/otherpage.html", myDir);
  } else if (page == "/otherotherpage") {
    indexPages(res, req, "/otherotherpage.html", myDir);
  } else if (page == "/ladybug.jpg") {
    indexPages(res, req, "/ladybug.jpg", myDir);
  } else if (page == "/api") {
    if ("student" in params) {
      let studentName = params["student"] == "leon" ? "leon" : "unknown";
      let studentStatus = params["student"] == "leon" ? "Boss Man" : "unknown";
      let studentOccupation =
        params["student"] == "leon" ? "Baller" : "unknown";
      const objToJson = {
        name: studentName,
        status: studentStatus,
        currentOccupation: studentOccupation,
      };
      res.end(JSON.stringify(objToJson));
    } //student if
  } //else if
  else if (page == "/css/style.css") {
    indexPages(res, req, "/css/style.css", myDir);
  } else if (page == "/js/main.js") {
    indexPages(res, req, "/js/main.js", myDir);
  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});
server.listen(8080);
