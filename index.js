var express = require("express");
var axios = require("axios");
var bodyParser = require("body-parser");
var massive = require("massive");
const pc = require("./db/products_controller.js");
const app = express();
require("dotenv").config();

// middleware

app.use(bodyParser.json())


massive(process.env.CONNECTION_STRING).then(dbInstance => { // question 'db' is the name of the folder?
    app.set('db', dbInstance);    
}).catch(err => console.log(err));

app.get(`/api/products`, pc.getAll);
app.get(`/api/product/:id`, pc.getOne);
app.put(`/api/product/:id`, pc.update);
app.post(`/api/product`, pc.create);
app.delete(`/api/product/:id`, pc.delete);



let { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`app is listening in Port${PORT}`);
});

