const http = require("http");
const { parse } = require("path");
const { json } = require("stream/consumers");

// Создаём запрос
const options = {
    hostname: `jsonplaceholder.typicode.com`,
    path: `/posts`,
    method: `GET`
};

// Отправляем запрос

const req = http.request(options, (res) => {
    let data = ``

    res.on(`data`, (chunk) => {
        data += chunk;
    });

    // Завершаем запрос

    res.on(`end`, () => {
        console.log(`Body:`, JSON,parse(data))
    })

    .on(`error`, (err) => {
        console.log(`Error:`, err)
    }).end();
});


// const host = "localhost";

//const port = "8000";

// http://localhost:8000

// const requestListener = function (req, res) {
   // res.writeHead(200);
  //  res.end("Hello, server is working well");
//};

//const server = http.createServer(requestListener);
//server.listen(port, host () => {
    //console.log(`Сервер запущен на http://${host}:${port}`)
//});


    

