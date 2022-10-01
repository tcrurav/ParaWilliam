const db = require("../models");
const Factura = db.facturacion;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.valorCif) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    const factura = {
        identificador: req.body.valorCif,
        proveedor: req.body.valorProveedor,
    };

    Factura.create(factura)
        .then(data => {
            res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Algún error ha ocurrido mientras se creaba la factura."
            });
        });
};

exports.findAll = (req,res) => {
    Factura.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algún error ha ocurrido mientras se buscaba facturas."
        });
    });
};

exports.findOne = (req, res) => {
};

exports.update = (req,res) => {
};

exports.delete = (req, res) => {
};




