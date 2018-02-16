const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const controller = require('./controller.js');

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.use(bodyParser.json());
app.use(cors());


app.get('/api/bin/:id', controller.getShelf);
app.get('/api/bin/:id', controller.getBin);
app.put('/api/bin/:id', controller.updateBin);
app.delete('/api/bin/:id', controller.deleteBin);
app.post('/api/bin/:id', controller.createBin);




const port = process.env.PORT || 9000
app.listen(port, () => {console.log(`ITS OVER ${port}`)})
