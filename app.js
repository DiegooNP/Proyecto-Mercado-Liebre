const express = require ("express");
const path = require("path")
const app = express();
const PORT= 3000;

app.use(express.static("public"));

app.get("/", (req,res) => {
    //res.send("Hola mundo");
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.listen(PORT, () => {
    console.log('server listening on ${PORT}');    
});