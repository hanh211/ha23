var express=require("express")
var app=express();
app.use(express.static("docs"));
// app.set("view engine","ejs");
// app.set("views","./docs");
app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: false }));

var server=require("http").Server(app);
// var io=require("socket.io")(server);
server.listen(process.env.PORT);

app.get("/",function(req,res){
  res.sendFile(__dirname+'/docs/index.html');
});

app.get("/ap",(req,res)=>{
  res.json("chao");
});
// app.post("/ap1",(req,res)=>{
//   console.log(res.boyd)
//   // res.sendFile(__dirname+'/docs/b.html')
// });
