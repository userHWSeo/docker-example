const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('Docker Example');
})

app.listen(8080, ()=> console.log('Sever is running'))