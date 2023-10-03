let express = require('express');
let router = express.Router();
let controller = require('../controllers/index.server.controller');

/* GET home page. */

router.get('/home', controller.getHome);
router.get('/aboutme', controller.getAboutMe);
router.get('/project', controller.getProject);
router.get('/contact', controller.getContact);
router.get('/services', controller.getServices);

module.exports = router;
