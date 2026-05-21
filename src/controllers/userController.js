const userModel = require('../models/userModel');

const obtenerUsuarios = async (req, res) => {

    try {

        const users = await userModel.getUsers();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

const renderUsers = async (req, res) => {

    try {

        const users = await userModel.getUsers();

        res.render('index', {
            users
        });

    } catch (error) {

        res.status(500).send(error.message);
    }
};

const crearUsuario = async (req, res) => {

    try {

        const { nombre, email } = req.body;

        await userModel.createUser(nombre, email);

        res.redirect('/');

    } catch (error) {

        res.status(500).send(error.message);
    }
};

const actualizarUsuario = async (req, res) => {

    try {

        const { id } = req.params;

        const { nombre, email } = req.body;

        await userModel.updateUser(id, nombre, email);

        res.redirect('/');

    } catch (error) {

        res.status(500).send(error.message);
    }
};

const eliminarUsuario = async (req, res) => {

    try {

        const { id } = req.params;

        await userModel.deleteUser(id);

        res.redirect('/');

    } catch (error) {

        res.status(500).send(error.message);
    }
};

module.exports = {
    obtenerUsuarios,
    renderUsers,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};