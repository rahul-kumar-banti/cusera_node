const  http=  require("http");
const host="localhost";
const port=5555;
const server=http.createServer((req,res)=>{
console.log(req.headers);
res.setHeader("content-type","text/html");
res.statusCode=200;
res.end("<h2>welcome  to  node  js</h1>");
});
server.listen(port,host,()=>{
    console.log("server is  running on "+"http://"+host+":"+port);
})