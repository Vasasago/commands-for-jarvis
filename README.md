# commands-for-jarvis

***НЕОФИЦИАЛЬНЫЕ КАСТОМНЫЕ КОМАНДЫ ДЛЯ JARVIS***

Список команд:<br>
-Браузер: открыть/закрыть/Открыть кинопоиск/Открыть YouTube/Открыть Я.Почта/Открыть Я.Переводчик/Открыть ВКонтакте<br>
-Калькулятор: открыть/закрыть<br>
-Discord: открыть/закрыть<br>
-Telegram: открыть/закрыть<br>
-Погода (Bing): открыть/закрыть<br>
-Диктофон (Windows): открыть (начать запись)/(остановить запись) закрыть<br>
-Steam Overlay: открыть/закрыть<br>
-Я.Музыка: открыть/закрыть/лайкнуть трек/следующий трек/предыдущий трек | Spotify: открыть/закрыть/следующий трек/предыдущий трек/пауза | VK Music: открыть (в браузере)<br>
-Я.Диск: открыть/закрыть<br>
-Jarvis: перезагрузка/спасибо/ты тупой/анекдоты<br>
-Windows: выключение/перезагрузка/спящий режим/диспетчер задач/очистить корзину/скриншот/свернуть все окна/буфер обмена/смена раскладки клавиатуры<br>
-Мультимедиа: пауза/полноэкранный режим/следующий ролик/отключить звук/включить звук/20% громкости/50% громкости/80% громкости/100% громкости/прибавить звук/убавить звук/переключиться на наушники/переключиться на динамики<br>

Для установки Кастомных команд заменить папку commands на скачанную

Внимание! Большинство программ запускаются через powershell. Если программа не запускается, необходимо изменить пути к ней в скрипте .ahk и заново скомпилировать компилятором Autohotkey<br>

Для работы Spotify/VK Music, необходимо заменить папку yamusic на необходимую.<br>

Для того, чтобы работало переключение на наушники/динамики:<br>
1. Скачать nircmd.exe и расположить его в папке C:\Windows
2. Заменить названия аудио устройств в .ahk и перекомпилировать в .ехе, либо изменить названия самих аудио устройств: наушники - Headphones, динамики - Speakers.

Посмотреть ключевые слова для выполнения команд можно в файлах command.yaml (открыть в любом текстовом редакторе/редакторе кода).<br>

Изменить .ahk файлы можно в любом текстовом редакторе/редакторе кода.<br>

При открытии браузера/сайтов используется браузер по-умолчанию. По команде "Закрыть браузер" по-умолчанию закрывается Яндекс.Браузер (изменить можно в соответствующем файле). Для открытия сайтов в стороннем браузере, необходимо указать полный путь к .ехе файлу браузера без кавычек перед ссылкой.
