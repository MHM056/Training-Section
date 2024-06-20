const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { PORT, DB_URL, corsOprtions } = require('./constants');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOprtions));
app.use(cookieParser());


app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));