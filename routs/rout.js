const Router = require("express");

const router = Router();

router.get("/", (req, res, next) => {
  res.send({
    ok: "main page",
  });
});

router.get("/new", (req, res, next) => {
  res.send({
    ok: "create new taskPage",
  });
});

router.post("/new", (req, res, next) => {
  res.send({
    ok: "create task",
  });
});

router.post("/delete", (req, res, next) => {
  res.send({
    ok: "delete task",
  });
});

router.post("/complete", (req, res, next) => {
  res.send({
    ok: "create task",
  });
});

module.exports = router;
