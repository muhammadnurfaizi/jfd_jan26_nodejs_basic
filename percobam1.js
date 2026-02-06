const http = require("http")

http.createServer( function(require, response){
    console.log("tes nyalain server");
    response.end("Hello word")
    }). listen(3000)

    // nyalain server : node namafile
    //matiin : ctrl + c