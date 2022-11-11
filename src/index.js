import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
const mongoClient = new MongoClient("mongodb://localhost:27017");
app.use(cors());
app.use(express.json());
let db;

mongoClient.connect().then(() => {db = mongoClient.db("bancodeteste")});

app.get(("/teste"), (req, res) => {
    db.collection("usuarios")
    .find()
    .toArray()
    .then((herois) => {console.log(herois); res.send(herois)})
    .catch((err) => {res.sendStatus(500)});
})

app.listen(5000, () => console.log("Server runnig in port: 5000"));
