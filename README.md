# commands-for-jarvis

***НЕОФИЦИАЛЬНЫЕ КАСТОМНЫЕ КОМАНДЫ ДЛЯ JARVIS***

***Список команд:<br><br>***
***1. AHK Компилятор:<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br><br>
***2. Браузер:<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br>
&#9;-Открыть кинопоиск<br>
&#9;-Открыть YouTube<br>
&#9;-Открыть Я.Почта<br>
&#9;-Открыть Я.Переводчик<br>
&#9;-Открыть ВКонтакте<br>
&#9;-Обновить вкладку<br>
&#9;-Закрыть вкладку<br>
&#9;-Открыть ChatGPT (Включает OpenVPN и открывает чат с GPT)<br>
&#9;-Переключить вкладку вправо<br>
&#9;-Переключить вкладку влево<br>
&#9;-Переключиться на последнюю вкладку<br>
&#9;-Открыть вкладку 1-8<br><br>
***3. Калькулятор:<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br><br>
***4. Discord:<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br><br>
***5. Telegram:<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br><br>
***6. Open VPN:<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br><br>
***7. Погода (Bing):<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br><br>
***8. Диктофон (Windows):<br>***
&#9;-Открыть (начать запись)<br>
&#9;-Закрыть (остановить запись)<br><br>
***9. Steam Overlay (игровой режим):<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br><br>
***10. Я.Музыка:<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br>
&#9;-Лайкнуть трек<br>
&#9;-Следующий трек<br>
&#9;-Предыдущий трек<br><br>
***10. Spotify:<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br>
&#9;-Следующий трек<br>
&#9;-Предыдущий трек<br>
&#9;-Пауза<br><br>
***11. VK Music:<br>***
&#9;-Открыть (в браузере)<br><br>
***12. Я.Диск:<br>***
&#9;-Открыть<br>
&#9;-Закрыть<br><br>
***13. Jarvis:<br>***
&#9;-Перезагрузка (и свернуть окна)<br>
&#9;-Спасибо<br>
&#9;-Ты глупый<br>
&#9;-Анекдоты<br>
&#9;-Открыть папку Jarvis<br>
&#9;-Открыть папку commands<br><br>
***14. Windows:<br>***
&#9;-Выключение (таймер 30 секунд)<br>
&#9;-Отмена выключения<br>
&#9;-Перезагрузка<br>
&#9;-Спящий режим<br>
&#9;-Диспетчер задач<br>
&#9;-Очистить корзину<br>
&#9;-Скриншот<br>
&#9;-Свернуть все окна<br>
&#9;-Буфер обмена<br>
&#9;-Смена раскладки клавиатуры<br>
&#9;-Открыть настройки<br>
&#9;-Закрыть настройки<br>
&#9;-Открыть папку загрузки<br>
&#9;-Свернуть текущее окно<br>
&#9;-Развернуть текущее окно<br><br>
***15. Проводник:<br>***
&#9;-Открыть(быстрый доступ)<br>
&#9;-Закрыть<br><br>
***16. Мультимедиа:<br>***
&#9;-Пауза<br>
&#9;-Полноэкранный режим<br>
&#9;-Следующий ролик<br>
&#9;-Отключить звук<br>
&#9;-Включить звук<br>
&#9;-20% громкости<br>
&#9;-50% громкости<br>
&#9;-80% громкости<br>
&#9;-100% громкости<br>
&#9;-Прибавить звук<br>
&#9;-Убавить звук<br>
&#9;-Переключиться на наушники<br>
&#9;-Переключиться на динамики<br>

Для установки Кастомных команд заменить папку commands на скачанную.<br>

***Внимание! Все программы запускаются через powershell (Telegram и Spotify через путь по-умолчанию. Ничего менять не требуется, если не менялся путь при установке). Если программа не запускается, необходимо изменить пути к ней на обычный в скрипте .ahk и заново скомпилировать компилятором Autohotkey***<br>

Для работы Open VPN необходимо вписать название имеющегося файла конфигурации.<br>

Для работы Spotify/VK Music, необходимо заменить папку yamusic на необходимую.<br>

Для того, чтобы работало переключение на наушники/динамики:<br>
1. Скачать nircmd.exe и расположить его в папке C:\Windows
2. Заменить названия аудио устройств в .ahk и перекомпилировать в .ехе, либо изменить названия самих аудио устройств: наушники - Headphones, динамики - Speakers.

Посмотреть ключевые слова для выполнения команд можно в файлах command.yaml (открыть в любом текстовом редакторе/редакторе кода).<br>

Изменить .ahk файлы можно в любом текстовом редакторе/редакторе кода.<br>

При открытии браузера/сайтов используется браузер по-умолчанию. По команде "Закрыть браузер" по-умолчанию закрывается Яндекс.Браузер (изменить можно в соответствующем файле). Для открытия сайтов в стороннем браузере, необходимо указать полный путь к .ехе файлу браузера без кавычек перед ссылкой.<br><br>

***Autohotkey быстрый старт: https://www.autohotkey.com/docs/v1/Tutorial.htm***<br>
***Проект Jarvis: https://github.com/Priler/jarvis***<br>
***Скачать установщик Jarvis: https://github.com/Priler/jarvis/releases/download/beta/jarvis-app_0.0.2_x64_en-US.msi***
