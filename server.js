const express = require("express");
require("dotenv").config();
require("./dbConnect");
const cors = require("cors");
const morgan = require('morgan');

const userRoutes = require('./routes/userRoutes')
const patientRoutes = require('./routes/patientRoutes')
const historyRoutes = require('./routes/historyRoutes')
const loginRoutes = require('./routes/loginRoutes')
const logoutRoutes = require('./routes/logoutRoutes')
const createUserRoutes = require('./routes/createUserRoutes')




const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


app.use('/users', userRoutes)
app.use('/patients', patientRoutes)
app.use('/histories', historyRoutes)
app.use('/login', loginRoutes)
app.use('/logout', logoutRoutes)
app.use('/create', createUserRoutes)




app.get("/", (req, res) => {
    res.json({ message: "Welcome to my EMS application." });

});

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});