const express = require("express");
const router = express.Router();

const { EJSON } = require("bson");

const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");
// Gets the details of eliForm user based on the email id being passed.
router.post("/", async function (req, res) {
  const body = req.body;

  const db = getDB();

  const objectId = new ObjectId(`${body.filter._id.$oid}`);
  const filter = { _id: objectId };
  
  await db
    .collection(body.collection)
    .findOneAndUpdate(filter, body.document);
  
  res.json({});
  res.end();
});

module.exports = router;
