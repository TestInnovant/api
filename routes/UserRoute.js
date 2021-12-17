const router = require("express").Router();
const UserController = require("../controller/UserController");




//Pour Donner l'accées au frontend 
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});



//Our routers here 
/**
 * @Path /user
 */
router.route("/SignUp")
    .post(UserController.createUser);


router.route("/SignIn")
    .post(UserController.userSignIn);


module.exports = router;