const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const URI = 'mongodb+srv://david:vnfxqVacAWbE0ET2@cluster0.a5dqo.mongodb.net/clusters?retryWrites=true&w=majority'

mongoose.connect(URI).then(db => console.log('DB is connected')).catch(err => console.error(err));

module.exports = mongoose;