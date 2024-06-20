const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));