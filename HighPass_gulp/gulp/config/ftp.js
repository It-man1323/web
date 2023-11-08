import parallel from "gulp";

export let configFTP = {
   host: "",   // Адрес FTP сервер
   user: "",   // Имя пользователя
   password: "",  // Пароль
   parallel: 5    // Количество одновременных потоков
}