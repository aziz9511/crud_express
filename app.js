const express = require('express')
var cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000;

var Routers = require('./routes/route');

// var corsOptions = {
//   origin: function (origin, callback) {
//     // db.loadOrigins is an example call to load
//     // a list of origins from a backing database
//     db.loadOrigins(function (error, origins) {
//       callback(error, origins)
//     })
//   }
// }

app.use(cors());

app.use(express.json());
app.use('/', Routers);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});