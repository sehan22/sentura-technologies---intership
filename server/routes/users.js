var express = require('express');
var router = express.Router();
const UserController = require('../controller/UserController');

const multer = require('multer');
const upload = multer();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/save', upload.single('picture'), UserController.saveUser);

module.exports = router;
