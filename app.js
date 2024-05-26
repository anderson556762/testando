const express = require("express");

const app = express();

app.get("/", function(req,res) {
    res.send("hello world!")
});

app.get("/user/:nome", function(req,res){
    res.send({
        nome: req.params.nome
    });
})

app.listen(8090, function(){
    console.log("o servidor esta rodando! ")
})