const express = require('express');
const app = express();
const port = process.env.port || 5000;
const db = require('./db');
const carsRoute = require('./routes/carsRoutes');
const cors = require("cors");

app.use(cors(
    {
        orgin: ["https://dwada.vercil.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.static("public"))


app.use(express.json());
app.use('/api/users/', require('./routes/usersRoutes'))
app.use(carsRoute);
app.get("/", (req, res) => {
    res.json("Backend Working")
})
app.listen(port, () => console.log(`node js server started in ${port}`));

