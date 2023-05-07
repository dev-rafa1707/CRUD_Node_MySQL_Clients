const Client = require('../models/schemaClient');


const clientController = {
    async getAll(req,res) {
        try {
            const clients = await Client.findAll();
            return res.json(clients);
        } catch (error) {
            return res.status(500).json({error: error.message });
        }
    },

    async getById(req,res) {

    },

    async getByCity(req,res) {

    },

    async create(req,res) {

    },

    async update(req,res) {

    },

    async delete(req,res) {

    },



};

module.exports = clientController