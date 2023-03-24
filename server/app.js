var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//cors
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var scalerRouter = require("./routes/scaler");
//中间件
var { createErr, errHandler } = require("./middleware/error");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/scaler", scalerRouter);

//错误级中间件放在路由之后注册
app.use(createErr);
app.use(errHandler);

// 监听8282端口
app.listen(8282, () => {
  console.log("服务已启动 http://localhost:8282");
});

module.exports = app;
