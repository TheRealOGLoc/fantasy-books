const mongoose = require('mongoose');

mongoose.connect(process.env.BATABASE_URL);

const db = mongoose.connections;

db.on('connect', function() {
    console.log(`Connected to MongoDB ${db.name} `)
})