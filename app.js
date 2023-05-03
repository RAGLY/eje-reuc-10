//Declaraciones para crear el servidor
const express = require("express");
const app = express();
const port = process.env.port || 3000;

//Configuraciones
//Para que busque el index.html
app.use(express.static('public'));

/*app.get("/",(req,res) => {
    res.send('En teoria es el index.html')
});*/

app.get("*",(req,res) => { 
    //res.send('404 | Página no encontrada 404.html')
    res.sendFile(__dirname+'public/404.html')
});
//Proceso
app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto: ",port);
});
/*
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo de los Servidores Web");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto http://localhost:${port}`);
})
        
app.use(express.static('public'));*/
