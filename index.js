/*const usersRoutes = require('./routes/users.routes')
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
//init DB
DB();

const app = express();
const router = express.Router;

app.use('/api',router);
authRoutes(router);
router.get('/',(req,res) => {
  res.send('Hola mundo');
});
app.use(router);


//Starting the server
app.listen(propierties.PORT, () => console.log('Server runing on port ${propierties.PORT}'));
*/

'use strict'
const cors = require('cors');
const authRoutes = require('./routes/users.routes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);

authRoutes(router);
router.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));