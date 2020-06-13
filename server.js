const express = require('express');

const app = express();

app.use(express.static('./dist/jc-pwcat'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/jc-pwcat/'}),
);

app.listen(process.env.PORT || 8080);