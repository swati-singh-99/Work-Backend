const express = require('express');
const app = express();

require('dotenv').config();

const userroute = require("./routers/user.route");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use("/user", userroute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

