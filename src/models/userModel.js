const db = require('../config/db');

const getUsers = async () => {

    const [rows] = await db.query('SELECT * FROM users');

    return rows;
};

const createUser = async (nombre, email) => {

    await db.query(
        'INSERT INTO users(nombre, email) VALUES(?, ?)',
        [nombre, email]
    );
};

const updateUser = async (id, nombre, email) => {

    await db.query(
        'UPDATE users SET nombre = ?, email = ? WHERE id = ?',
        [nombre, email, id]
    );
};

const deleteUser = async (id) => {

    await db.query(
        'DELETE FROM users WHERE id = ?',
        [id]
    );
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};