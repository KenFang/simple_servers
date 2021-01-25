// Object literals routeResponseMap: Define mapping of routes(the request's URL) with responses.
const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello": "<h1>Say hello by emailing us here</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>",
};

const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");

// A server object; app; has a callback function, (request, response) => {}
// A callback function runs every time when a request is made to the server.
app = http
  .createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html",
    });

    // To obtain the value of routeResponseMap's a property, use the dot (.) or square bracket ([]).
    // Check whether the request's URL has a match in routeResponseMap.
    if (routeResponseMap[request.url]) {
      response.end(routeResponseMap[request.url]);
    } else {
      response.end("<h1>Welcome</h1>");
    }
  })
  .listen(port);

console.log(`The server has started and is listing on port number: ${port}`);
