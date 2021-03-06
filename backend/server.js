require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/handleError");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(result => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch(e => {
    console.log(e);
    process.exit(1);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/goals", require("./routes/routes"));
app.use("/api/users", require("./routes/userRoutes"));



app.use(errorHandler);
