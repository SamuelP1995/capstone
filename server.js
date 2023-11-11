const express = require("express");
require("dotenv").config();
require("./dbConnect");


const userRoutes = require('./routes/userRoutes')
const patientRoutes = require('./routes/patientRoutes')
const historyRoutes = require('./routes/historyRoutes')


const app = express();

app.use(express.json());


app.use('/api/users', userRoutes)
app.use('/api/patients', patientRoutes)
app.use('api/histories', historyRoutes)


app.get("/", (req, res) => {
    res.json({ message: "Welcome to my EMS application." });

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});