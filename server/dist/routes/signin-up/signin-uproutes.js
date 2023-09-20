"use strict";
// const express = require('express')
// const {login,register,create} = require('../../controller/signin-up/signinUpcontroller')
var router = express.Router();
router.post('/login', login);
router.post('/register', register);
router.get(`/email/:email`, create);
module.exports = router;
//# sourceMappingURL=signin-uproutes.js.map