//https://www.nodebeginner.org/index-es.html
var http = require("http");
function iniciar() {
    function onRequest(request, response) {
    console.log("Petición Recibida.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Localhost server started in 8888 port");
    }
    exports.iniciar = iniciar;