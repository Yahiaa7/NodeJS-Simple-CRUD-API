const express = require('express');
const { dbConnectSync } = require('./utils/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/images', express.static('images'));

// connect and sync the DB 
dbConnectSync();

// give the app access to out routes
app.use('/api', require('./routes/index.routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});

