const app = require('express').Router();
const { itemController } = require('../controllers');
const { uploadImage } = require('../middlewares');

app.get('/test', (req, res) => {
    res.status(200).send({ message: 'Hello from my simple server!' });
});
// createItem
app.post('/createItem', uploadImage, itemController.createItem);
// listItems
app.get('/listItems', itemController.listItems);
// getItem:id
app.get('/getItem/:id', itemController.getItem);
// updateItem:id
app.put('/updateItem/:id', itemController.updateItem);
// deleteItem:id
app.delete('/deleteItem/:id', itemController.deleteItem);


module.exports = app;