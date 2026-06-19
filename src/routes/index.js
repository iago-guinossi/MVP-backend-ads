const router = require("express").Router();
const authRoutes = require("./auth.routes");
const trilhasRoutes = require("./trilhas.routes");

router.use("/", authRoutes);
router.use("/trilhas", trilhasRoutes);

module.exports = router;
