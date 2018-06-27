const fetch = require("node-fetch");
const logSpacing = "\n\n\n";
const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

let offset = Math.floor(Math.random()* 18001)

const categoryURI = "http://jservice.io/api/categories?count=100&offset=";
const fs = require("fs")



fetch(categoryURI + offset)
    .then(response => {
        console.log(logSpacing);
        console.log("NODE-FETCH library way of making a GET request (using .then())");
        console.log("Status code:", response.status);
        return response.json();
    })
    .then(hydratedBody => {
        console.log(hydratedBody);
    
        fs.writeFile("categories.JSON", JSON.stringify(hydratedBody), function (err){
            if(err) throw err; 
            console.log("Saved!");

        })
    
    });

const server = http.createServer((req, res) => {
    res.end("boobies")
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});