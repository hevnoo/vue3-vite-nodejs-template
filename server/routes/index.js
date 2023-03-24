var express = require("express");
var router = express.Router();
const querySql = require("../db/index");

//获取当前用户信息
router.get("/info", async (req, res, next) => {
  let { username } = req.auth;
  try {
    let userinfo = await querySql("select * from users where username = ?", [
      username,
    ]);
    res.send({ code: 0, msg: "成功", data: userinfo[0] });
  } catch (e) {
    res.send({ code: -1, msg: "失败" });
    console.log(e);
    next(e);
  }
});

module.exports = router;
