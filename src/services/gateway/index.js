const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app= express();

app.use(cors());
app.use(express.json());

app.get('/fetchdata',proxy('http://localhost:8001'));
app.get('/getdata',proxy('http://localhost:8002'))
app.post('/updatedata',proxy('http://localhost:8003'))

app.listen(8000,()=>{
    console.log('Gateway is listening on port 8000');
})