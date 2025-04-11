const express = require("express");
const router = express.Router();

const { EJSON } = require("bson");

const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");
// Gets the details of eliForm user based on the email id being passed.
router.post("/", async function (req, res) {
  const body = req.body;

  const db = getDB();

  const filter = EJSON.parse(body.filter, { relaxed: false });
  const document = EJSON.parse(body.document, { relaxed: false });

  await db.collection(body.collection).findOneAndUpdate(filter, document);

  res.json({});
  res.end();
});

module.exports = router;
