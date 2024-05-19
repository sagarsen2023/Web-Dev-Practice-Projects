const express = require('express');
const postModel = require("./models/postModel.js")
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  let data = await postModel.find()
  res.render('index', { data: data});
});

app.post("/create", async (req, res) => {
  const { title, description, imageURL } = req.body;
  let newPost = await postModel.create({
    title,
    description,
    imageurl: imageURL,
  });
  res.redirect("/");
})  

app.get('/update/:id', async (req, res) => {
  let data = await postModel.findOne({_id: req.params.id});
  res.render('update', {data: data});
})

app.post("/update/:id", async (req, res) => {
  const { title, description, imageURL } = req.body;
  let updatedData = await postModel.updateOne({_id: req.params.id}, {
    title,
    description,
    imageurl: imageURL,
  });
  console.log(updatedData)
  res.redirect("/");
})

app.get("/delete/:id", async(req, res) => {
  await postModel.deleteOne({_id: req.params.id});
  res.redirect("/");
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
