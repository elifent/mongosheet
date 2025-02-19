const express = require("express");
const router = express.Router();

const { EJSON } = require("bson");

const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");
// Gets the details of eliForm user based on the email id being passed.
router.post("/", async function (req, res) {
  const body = req.body;

  const db = getDB();
  const objectIds = body.filter._id.$in.map((item) => {
    return new ObjectId(`${item.$oid}`);
  });

  const filter = { _id: { $in: objectIds } };
  await db.collection(body.collection).deleteMany(filter);

  res.json({});
  res.end();
});

module.exports = router;
