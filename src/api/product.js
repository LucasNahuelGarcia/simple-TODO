const express = require("express");
const router = express.Router();

router.get("/hola" , async (req,res) => {
    try {
        res.json({
            message: "Get Data from API successfull",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }
})

module.exports = router;