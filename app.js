const express = require ("express");
const path = require("path")
const app = express();
const PORT= process.env.PORT || 3001;

app.use(express.static("public"));

app.get("/", (req,res) => {
    //res.send("Hola mundo");
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.listen(PORT, () => {
    console.log('server listening on ${PORT}');    
});