const express=require("express");
const http=require("http");
const morgan=require("morgan");
const bodyParser=require("body-parser");
const host="localhost";
const port=5555;
const app=express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(__dirname+"/public"));
app.all("/dishes",(req,res,next)=>{
    res.sendStatus=200;
    res.header("Content-Type","text/html");
    next();

})
app.get("/dishes",(req,res,next)=>{
    res.end("we  will send  you  list  of all dishes ");
});
app.post("/dishes",(req,res,next)=>{
    res.end("will  be add for  dishes for"+req.body.name+"and  description:"+req.body.description);
})
app.put("/dishes",(req,res,next)=>{
    res.end("we  will update list of  "+req.body.name);
});
app.delete("/dishes",(req,res,next)=>{
    res.end("dishes will  be  deleted");
});
app.get("/dishes/:dishid",(req,res,next)=>{
    res.end("we  will send  you  "+req.params.dishid+"  dishes ");
});
app.post("/dishes/:dishid",(req,res,next)=>{
    res.end("will  be add for  dishes for"+req.body.name+"and  description:"+req.body.description+"with id"+req.params.dishid);
})
app.put("/dishes/:dishid",(req,res,next)=>{
    res.end("we  will update list of  "+req.params.dishid);
});
app.delete("/dishes/:dishid",(req,res,next)=>{
    res.end("dishes will  be  delete:"+req.params.dishid);
})
app.use((req,res,next)=>{
    res.setHeader("Content-Type","text/html");
    res.statusCode=200;
    res.end("<h3 style='color:red'>welcome to express</h3>");
});

const server=http.createServer(app);
server.listen(port,host,()=>{
    console.log("server is  running on "+"http://"+host+":"+port);
    
})