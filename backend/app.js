const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors({
  origin: 'https://shop-dot-v3-m3z4.vercel.app',
  credentials: true,
  optionsSuccessStatus: 204, // 204 No Content is a common choice
}));

app.use(express.json());
app.use(cookieParser());
app.use("/test", (req, res) => {
  res.send("Hello world!");
});
app.use(bodyParser.json({ limit: '135mb' }));

app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: '135mb',
    parameterLimit: 80000,
  }),
);
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/coupounCode");
const payment = require("./controller/payment");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message = require("./controller/message");
const withdraw = require("./controller/withdraw");

app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
