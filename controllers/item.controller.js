const { models: { Item } } = require('../models');

module.exports.createItem = async (req, res) => {
    try {
        if (!req.body.name || !req.body.description) return res.status(400).send({ message: 'Invalid Request, not enough parameters!' })
        if (req.file) req.body.picture = req.file.path;
        let item = await Item.create(req.body);
        return res.status(200).send({
            message: 'New Item Added Successfully!',
            item
        })
    } catch (err) {
        return res.status(500).send({ message: `Could't process your request!\n${err}` });
    }
};

module.exports.listItems = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const pageSize = parseInt(req.query.pageSize, 10) || 5;
        let items = await Item.findAndCountAll({
            offset: (page - 1) * pageSize,
            limit: pageSize
        });
        return res.status(200).send(
            {
                page,
                pageSize: items.rows.length,
                totalPages: Math.ceil(items.count / pageSize),
                items: items.rows
            }
        )
    } catch (err) {
        return res.status(500).send({ message: `Could't process your request!\n${err}` });
    }
};

module.exports.getItem = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).send({ message: 'Invalid Request, not enough parameters!' })
        let item = await Item.findByPk(id);
        if (!item) return res.status(404).send({ message: 'Item not found!' });
        return res.status(200).send({ item })
    } catch (err) {
        return res.status(500).send({ message: `Could't process your request!\n${err}` });
    }
};

module.exports.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).send({ message: 'Invalid Request, not enough parameters!' })
        let item = await Item.findByPk(id);
        if (!item) return res.status(404).send({ message: 'Item not found!' });
        item.set(req.body);
        await item.save();
        return res.status(200).send({ message: 'Successfully updated an item!', item })
    } catch (err) {
        return res.status(500).send({ message: `Could't process your request!\n${err}` });
    }
};

module.exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).send({ message: 'Invalid Request, not enough parameters!' })
        let item = await Item.findByPk(id);
        if (!item) return res.status(404).send({ message: 'Item not found!' });
        await item.destroy();
        return res.status(200).send({ message: 'Successfully deleted an item!' })
    } catch (err) {
        return res.status(500).send({ message: `Could't process your request!\n${err}` });
    }
};