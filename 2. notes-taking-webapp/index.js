const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    fs.readdir("./files", (err, files) => {
        data = {}
        if(files.length > 0) {
            files.forEach((file) => {
                const details = fs.readFileSync(`./files/${file}`, 'utf8');
                data[file] = details.toString();
            })
        }
        res.render('index', { files: files, data: data });
    })
});

app.post("/create", (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, function (err){
        res.redirect("/");
    });
})

app.get("/files/:filename", (req, res) => {
    fs.unlink(`./files/${req.params.filename}`, (err) => {
        res.redirect("/");
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
