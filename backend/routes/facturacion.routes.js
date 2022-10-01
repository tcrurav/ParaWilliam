module.exports = app => {
    const facturas = require("../controllers/facturacion.controller.js");

    var router = require("express").Router();

    router.post("/", facturas.create);

    router.get("/", facturas.findAll);

    router.get("/:identificador", facturas.findOne);

    router.put("/:identificador", facturas.update);

    router.delete("/:identificador", facturas.delete);

    app.use('/api/facturas', router);
};