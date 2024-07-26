const express = require('express');
const moment = require('moment');

const router = express.Router();
router.get('/', (req, res) => {
  res.render('index');
});
/* PLOP_INJECT_IMPORT */


module.exports = router;
