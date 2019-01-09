const  http=  require("http");
const path=require("path");
const fs=require("fs");
const host="localhost";
const port=5555;
const server=http.createServer((req,res)=>{
console.log("requested url is "+req.url+" request method is "+req.method);
var filereq=req.url;
if(filereq=='/') filereq="/index.html";
filepath=path.resolve("public"+filereq);
var ext=path.extname(filepath);
if(ext==".html"){
    fs.exists(filepath,(exists)=>{
        if(!exists){
            res.setHeader("content-type","text/html");
            res.statusCode=404;
            res.end("requested url note found 404:"+filepath+" not found");
            return
        }
        res.setHeader("content-type","text/html");
        res.statusCode=200;
        fs.createReadStream(filepath).pipe(res);


    });

}
else{
    res.setHeader("content-type","text/html");
    res.statusCode=404;
    res.end("requested url note found 404:"+filepath+"is not html file");
}
});
server.listen(port,host,()=>{
    console.log("server is  running on "+"http://"+host+":"+port);
    
})