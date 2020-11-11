const app = require("express")();
const mongoose = require("mongoose");
const routes = require("./src/routes");
require("dotenv").config();
const cors = require("cors");

app.use(cors());

mongoose.connect(process.env.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333);
