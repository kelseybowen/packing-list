const ItemController = require('../controllers/item.controller');

module.exports = (app) => {
    app.get('/', ItemController.index);
    app.get('/items', ItemController.findAllItems);
    // app.get('/api/players/:id', PlayerController.findOnePlayerById);
    // app.put('/api/players/:id', PlayerController.updatePlayer);
    // app.post('/api/players/add', PlayerController.createPlayer);
    // app.delete('/api/players/:id', PlayerController.deletePlayer);
}