const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const express = require("express");
const PORT = require("./constantPort/constants.js");
const downApp = express();
const router = require("./routs/rout.js");
const { engine } = require("express-handlebars");
//подклбчение библиотеки пути для express.static()
const path = require("path");
//express-handlebars
downApp.engine(
  "e-hbs",
  engine({
    defaultLayout: "main",
    extname: "hbs",
  })
);
//парартры приложение и создание папок для хранение шаблонов express-handlebars
downApp.set("view engine", "hbs");
downApp.set("views", "./views");
//компанда расширение public
downApp.use(
  express.static(path.join(__dirname, "public")) //не исползовать прямые пути к папке локалке и сервере
);

downApp.use(router);
async function InitApp() {
  //запуск на порте и действия (поменять порт при ошибке)
  const liveServer = downApp.listen(PORT, () => {
    console.log(`Сервер работает: http://localhost:${PORT}`);
    function question() {
      rl.question("Закончить работу? ", (input) => {
        try {
          if (input === "да") {
            liveServer.close(() => {
              console.log("Сервер остановлен.");
              rl.close();
            });
          } else {
            question();
          }
        } catch (error) {
          console.log("Непредвиденная ошибка", err);
        }
      });
    }
    question();
  });
}
InitApp();
