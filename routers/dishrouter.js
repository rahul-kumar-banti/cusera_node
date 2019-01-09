const  express=require("express");
const bodyParser=require("body-parser");
const  dishrouter=express.Router();
dishrouter.use(bodyParser.json());
dishrouter.route("/")
.all((req,res,next)=>{
    res.sendStatus=200;
    res.header("Content-Type","text/html");
    next();

})
.get((req,res,next)=>{
    res.end("we  will send  you  list  of all dishes ");
})
.post((req,res,next)=>{
    res.end("will  be add for  dishes for"+req.body.name+"and  description:"+req.body.description);
})
.put((req,res,next)=>{
    res.end("we  will update list of  "+req.body.name);
})
.delete((req,res,next)=>{
    res.end("dishes will  be  deleted");
});
dishrouter.route("/:dishid")
.get((req,res,next)=>{
    res.end("we  will send  you  "+req.params.dishid+"  dishes ");
})
.post((req,res,next)=>{
    res.end("will  be add for  dishes for"+req.body.name+"and  description:"+req.body.description+"with id"+req.params.dishid);
})
.put((req,res,next)=>{
    res.end("we  will update list of  "+req.params.dishid);
})
.delete((req,res,next)=>{
    res.end("dishes will  be  delete:"+req.params.dishid);
})

module.exports=dishrouter;