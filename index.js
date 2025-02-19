const express = require("express");

const { connectDB } = require("./api/config/db");
const findRouter = require("./api/routes/find");
const insertRouter = require("./api/routes/insert-one");
const updateRouter = require("./api/routes/update-one");
const deleteRouter = require("./api/routes/delete-many");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB().then(() => {
  app.use("/api/find", findRouter);
  app.use("/api/insert-one", insertRouter);
  app.use("/api/update-one", updateRouter);
  app.use("/api/delete-many", deleteRouter);

  app.listen(PORT, () => console.log(`Server running on port ${process.env.PORT}`));
});
