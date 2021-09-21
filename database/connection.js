const mongoose = require("mongoose");

mongoose
    .connect(process.env.ATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error('ERROR AL CONECTAR DB: ', err));