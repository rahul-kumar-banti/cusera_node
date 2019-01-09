const express=require("express");
const http=require("http");
const morgan=require("morgan");
const host="localhost";
const port=5555;
const app=express();
app.use(morgan("dev"));
app.use(express.static(__dirname+"/public"));
app.use((req,res,next)=>{
    res.setHeader("Content-Type","text/html");
    res.statusCode=200;
    res.end("<h3 style='color:red'>welcome to express</h3>");
});

const server=http.createServer(app);
server.listen(port,host,()=>{
    console.log("server is  running on "+"http://"+host+":"+port);
    
})