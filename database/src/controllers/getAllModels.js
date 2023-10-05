const database = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model } = req.params;
    const data = await database[model].list();
    response(res, 200, data);
};