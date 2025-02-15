// imports
const express = require("express")
const fs   = require( "node:fs" );
const mime = require( "mime" );

// init express server
const dir = "public/"
const port = 3000;
const server = express()
server.use(express.json())

// ------------------------ handle GET requests ------------------------ 
server.get("/", (request, response) => {
    sendFile(response, dir + "index.html")
});

server.get("/index.html", (request, response) => {
    sendFile(response, dir + "index.html")
});

server.get("/data", (request, response) => {
    sendFile(response, "data/us-states.json")
});

server.get("*", (request, response) => {
    const filename = dir + request.url.slice(1);
    sendFile(response, filename);
});

const sendFile = function(response, filename) {
    const type = mime.getType(filename);
    fs.readFile(filename, function (err, content) {
        if (err === null) {
            response.status(200).type(type).send(content);
        } else {
            response.status(404).send("404 Error: File Not Found");
        }
    })
}

// ------------------------ start server ------------------------ 
server.listen(process.env.PORT || port);