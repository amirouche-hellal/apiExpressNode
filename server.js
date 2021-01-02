const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const biens = require('./api/biens')

app.use(express.json())
app.use("/api/biens", biens)

app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`);
});
