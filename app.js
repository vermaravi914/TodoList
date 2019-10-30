//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date=require(__dirname+"/date.js");//here we are connecting the home with date
let items=[];
let workItems=[];//here we are creating an array so that we can add more than one item
app.set('view engine', 'ejs');//note this must be same as mentioned because otherwise it wont work , and also the code is taken using keyword ejs node with express
//this code is noted straight from ejs website documentation
app.use(bodyParser.urlencoded({extended:true}));//you need to mention the body parser when you are grabbing a value from website to the server
app.use(express.static("public"));

app.get("/", function(req, res) {
 let  day= date.getDate();

  res.render("list", { listTitle: day , newListItems:items});//in one point only we are rendering all the templates

 //when using ejs alwyays use write res.render instead of send and write

});


app.post("/",function(req,res){
  let item=req.body.newItem;
  if(req.body.list==="work")
{
  workItems.push(item);
  res.redirect("/work");
}else
{
  items.push(item);//here we are pushing the new items into the array items
  res.redirect("/");//here the value that came to the post is send to the variable item that is again re-directed to home
  console.log(item);
}

});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"work list", newListItems:workItems});

});
app.post("/work",function(req,res){// here we have created a brand new list that is currently connected to the home
  let item=req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("the server is running on port 3000");
});
