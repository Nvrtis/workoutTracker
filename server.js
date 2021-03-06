// Requiring necessary npm packages
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models/index.js");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
//connection mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",   {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Creating express app and configuring middleware 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// Syncing our database and logging a message to the user upon success.
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

