const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hellow from the other side');
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

// https://stackabuse.com/building-a-rest-api-with-node-and-express/