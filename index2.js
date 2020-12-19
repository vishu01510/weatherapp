const fs = require("fs");
const http = require("http");
var requests = require("requests");

const homefile = fs.readFileSync("home.html", "utf-8");

const replaceval = (tempval, orgval) => {
  let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
  temperature = tempval.replace("{%tempmin%}", orgval.main.temp);
  temperature = tempval.replace("{%tempmax%}", orgval.main.temp);
  temperature = tempval.replace("{%location%}", orgval.main.temp);
  temperature = tempval.replace("{%country%}", orgval.main.temp);
  temperature = tempval.replace("{%tempstatus%}", orgval.weather[0].country);

  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "http:// api.openweathermap.org/data/2.5/weather?q=vancouver&appid=d01e2561e2eb3e39c6c497b19f0b1d61"
    )
      .on("data", function (chunk) {
        const objdata = JSON.parse(chunk);
        const arrdata = [objdata];

        const realtime = arrdata.map((val) =>
          replaceval(homefile, val).join("")
        );
        res.write(realtime);
      })
      .on("end", function (err) {
        if (err) return console.log("erorrrrr", err);
        res.end();
      });
    //data and end stream video ch dasia c
  }
});

server.listen(8000, "127.0.0.1");
