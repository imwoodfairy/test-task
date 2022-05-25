const express = require('express');
const cors = require('cors');
const PORT = 5000;
const router = require('./router');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start()