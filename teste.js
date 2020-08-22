const mongoose = require('mongoose');
const fs = require('fs');
const server = 'mongodb+srv://usuario:usuario@arbyte.obhjq.mongodb.net/development?retryWrites=true&w=majority'
mongoose.connect(server, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', () => console.log('deu ruim'))
db.once('open', () => console.log('deu bom'))
const restaurantShcema = new mongoose.Schema({
    name: String,
    lastName: String,
});
const Restaurant = mongoose.model('Restaurant', restaurantShcema);
async function many(data) {
    await Restaurant.insertMany(data);
    const item = await Restaurant.find({});
    return item.length;
}
const data = fs.readFileSync('./teste.json');
const jsonData = JSON.parse(data);
many(jsonData)
    .then(item => console.log(item))