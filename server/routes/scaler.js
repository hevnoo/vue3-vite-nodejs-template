var express = require("express");
var router = express.Router();
const querySql = require("../db/index");

//查询接口
router.get("/getScaler", async (req, res, next) => {
  let { sid } = req.query;
  try {
    let sql = "select * from scaler where sid = ? ";
    let values = await querySql(sql, [sid]);
    res.send({ code: 0, msg: "获取成功", data: values || 0 });
  } catch (e) {
    res.send({ code: -1, msg: "获取失败" });
    console.log(e);
    next(e);
  }
});

//计数接口
router.post("/scaler", async (req, res, next) => {
  let { sid, action, value } = req.body;
  try {
    let sqls = "select value from scaler where sid = ? ";
    let Val = await querySql(sqls, [sid]);
    let oldVal = Number(Val[0].value);
    if (action == "plus") {
      let newVal = oldVal + value;
      let sql = "update scaler set value=? where sid = ? ";
      await querySql(sql, [newVal, sid]);
      res.send({ code: 0, msg: "" });
    } else if (action == "minus") {
      let newVal = oldVal - value;
      let sql = "update scaler set value=? where sid = ? ";
      await querySql(sql, [newVal, sid]);
      res.send({ code: 0, msg: "" });
    }
  } catch (e) {
    res.send({ code: -1, msg: "unknown error!" });
    console.log(e);
    next(e);
  }
});

module.exports = router;
