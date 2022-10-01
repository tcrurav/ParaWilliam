const express = require ("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./models");

// normal use. Doesn't delete the database data
db.sequelize.sync();

/*db.sequelize.sync({force: true}).then(() => {
    console.log("Eliminando tablas existentes y sincronizando la base de datos.");
});*/

app.get("/", (req, res) => {
    res.json({message: "Bienvenido a la aplicación de facturación."});
});

require("./routes/facturacion.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${PORT}.`);
});