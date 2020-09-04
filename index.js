const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

const { mongoose } = require('./database')

//Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(cors());
app.use('/api',router);

//Routes
//app.use('/api/users',require('./login/users.routes'));

//authRoutes(router);
router.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use(router);


//Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Serve on port ', app.get('port'));
})