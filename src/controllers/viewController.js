const userModel = require('../models/userModel');

const mostrarVista = async (req, res) => {

    try {

        const users = await userModel.getUsers();

        res.render('index', {
            users
        });

    } catch (error) {

        res.status(500).send(error.message);
    }
};

module.exports = {
    mostrarVista
};