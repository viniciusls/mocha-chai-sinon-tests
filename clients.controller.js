const clientsService = require('./clients.service');

const getClientById = (req, res) => {
    let id = req.params.id;

    clientsService.getClientById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send(err));
}

module.exports = { getClientById }