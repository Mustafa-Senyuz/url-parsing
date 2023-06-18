var http = require("http");
var url = require("url");

http.createServer(function (req, res) {

    var q = url.parse(req.url, true).query;     //http://localhost:8080/?name=mustafa&lastname=senyuz&country=germany
    var txt = "firstname :" + q.name + ", lastname :" + q.lastname + ", country : " + q.country;
    console.log(req.url);
    res.end(txt);

}).listen(8080, () => "uygulama 8080 portunda calismaya basladi ... ");