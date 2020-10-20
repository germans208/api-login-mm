let express = require('express');
let app = express();
let apiRouter = require('./routes/api');
let cors = require('cors');

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(3001, () => {
    console.log("Servidor corriendo en el puerto 3001")
})