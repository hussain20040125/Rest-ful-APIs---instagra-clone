// const { profile } = require("console");
const express = require("express");
const mongoose = require("mongoose")
const Listing = require('./models/listing')
const app = express();
const methodOverride = require("method-override")
app.use(methodOverride('_method'))

const path = require("path")
// const { v4: uuidv4 } = require('uuid');

const port = 8080;

app.listen(port, () => {
    console.log("listening port : 8080")
})

const MONGO_URL = 'mongodb://127.0.0.1:27017/instagram';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

} 


app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))



//------------- Routes are define here -------------

app.get('/',(req,res)=>{
    res.send('root is working')
})

app.get("/posts", async (req, res) => {
    let post = await Listing.find({});
    // res.send(post);
    res.render("index.ejs", { post })
})


app.get("/posts/new", (req, res) => {

    res.render("new.ejs")

})
app.post("/posts/data", async(req, res) => {
    const newListing = new Listing(req.body)
    await newListing.save();
   
    res.redirect("/posts")
})
app.get("/posts/:id", async (req, res) => {
    let { id } = req.params;
    let a = await Listing.findById(id)
    // let a = post.find((p) => id === p.id)
    res.render("view.ejs", { a });
})

app.get("/posts/:id/edit", async (req, res) => {
    let { id } = req.params
    let a = await Listing.findById(id)
    res.render("edit.ejs", { a })
})

app.patch("/posts/:id", async (req, res) => {
    let { id } = req.params
    let { profile, username, name } = req.body
    await Listing.findByIdAndUpdate(id ,{profile,username,name})
    res.redirect("/posts")
})

app.delete("/posts/:id/delete", async(req, res) => {
    let { id } = req.params
    await Listing.findByIdAndDelete(id)
    // post = post.filter((p)=> id !==p.id)
    res.redirect("/posts")
})
