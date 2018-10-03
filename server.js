const express = require('express');
const socket = require('socket.io');

const app = express();

//Serve static assets if in production environment
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('./client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}
// Define port
const port = process.env.PORT || 5000;

app.listen(port, () => console.info(`Listening on port ${port}`));
