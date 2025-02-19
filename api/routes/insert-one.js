const express = require("express");
const router = express.Router();

const { EJSON } = require("bson");

const { getDB } = require("../config/db");
// Gets the details of eliForm user based on the email id being passed.
router.post("/", async function (req, res) {
  const body = req.body;

  const db = getDB();
  const doc = EJSON.parse(body.document, { relaxed: false });

  const result = await db.collection(body.collection).insertOne(doc);

  const ejson = EJSON.stringify(result, { relaxed: false });

  res.json(JSON.parse(ejson));
  res.end();
});

module.exports = router;
