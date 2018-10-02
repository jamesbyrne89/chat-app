const express = require('express');

const app = express();



// Define port
const port = process.env.PORT || 5000;

app.listen(port, () => console.info(`Listening on port ${port}`))