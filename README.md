# commands-for-jarvis

***НЕОФИЦИАЛЬНЫЕ КАСТОМНЫЕ КОМАНДЫ ДЛЯ JARVIS***

***Список команд:<br><br>***
***1. AHK Компилятор:<br>***
- Открыть<br>
- Закрыть<br><br>

***2. Браузер:<br>***
- Открыть<br>
- Закрыть<br>
- Открыть КиноПоиск<br>
- Открыть YouTube<br>
- Открыть Я.Почта<br>
- Открыть Я.Переводчик<br>
- Открыть ВКонтакте<br>
- Обновить вкладку<br>
- Закрыть вкладку<br>
- Открыть ChatGPT (Включает OpenVPN и открывает чат с GPT)<br>
- Переключить вкладку вправо<br>
- Переключить вкладку влево<br>
- Переключиться на последнюю вкладку<br>
- Открыть вкладку 1-8<br><br>


***3. Калькулятор:<br>***
- Открыть<br>
- Закрыть<br><br>


***4. Discord:<br>***
- Открыть<br>
- Закрыть<br><br>


***5. Telegram:<br>***
- Открыть<br>
- Закрыть<br><br>


***6. Open VPN:<br>***
- Открыть<br>
- Закрыть<br><br>


***7. Погода (Bing):<br>***
- Открыть<br>
- Закрыть<br><br>


***8. Диктофон (Windows):<br>***
- Открыть (начать запись)<br>
- Закрыть (остановить запись)<br><br>


***9. Steam Overlay (игровой режим):<br>***
- Открыть<br>
- Закрыть<br><br>


***10. Я.Музыка:<br>***
- Открыть<br>
- Закрыть<br>
- Лайкнуть трек<br>
- Следующий трек<br>
- Предыдущий трек<br><br>


***11. Spotify:<br>***
- Открыть<br>
- Закрыть<br>
- Следующий трек<br>
- Предыдущий трек<br>
- Пауза<br><br>


***12. VK Music:<br>***
- Открыть (в браузере)<br><br>


***13. Я.Диск:<br>***
- Открыть<br>
- Закрыть<br><br>


***14. Jarvis:<br>***
- Перезагрузка (и свернуть окна)<br>
- Спасибо<br>
- Ты глупый<br>
- Анекдоты<br>
- Открыть папку Jarvis<br>
- Открыть папку commands<br><br>


***15. Windows:<br>***
- Выключение (таймер 30 секунд)<br>
- Отмена выключения<br>
- Перезагрузка<br>
- Спящий режим<br>
- Диспетчер задач<br>
- Очистить корзину<br>
- Скриншот<br>
- Свернуть все окна<br>
- Буфер обмена<br>
- Смена раскладки клавиатуры<br>
- Открыть настройки<br>
- Закрыть настройки<br>
- Открыть папку загрузки<br>
- Свернуть текущее окно<br>
- Развернуть текущее окно<br><br>


***16. Проводник:<br>***
- Открыть(быстрый доступ)<br>
- Закрыть<br><br>


***17. Мультимедиа:<br>***
- Пауза<br>
- Полноэкранный режим<br>
- Следующий ролик<br>
- Перемотка вперед<br>
- Перемотка назад<br>
- Отключить звук<br>
- Включить звук<br>
- 20% громкости<br>
- 50% громкости<br>
- 80% громкости<br>
- 100% громкости<br>
- Прибавить звук<br>
- Убавить звук<br>
- Переключиться на наушники<br>
- Переключиться на динамики<br><br>


***18. Voice film searcher (голосовой поиск фильмов и сериалов):***<br>


Доступные сервисы:<br>
- Kinopoisk - https://hd.kinopoisk.ru<br>
- IVI - https://www.ivi.ru/<br>
- LordFilm - https://hd.ixfilm.org<br>
- HDRezka - https://rezka.ag<br>
- YouTube - https://www.youtube.com<br><br>


Для работы этих скриптов необходимо установить два расширения:<br>

1. [Custom JavaScript for Websites 2 (для скриптинга сочетаний клавиш)](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk)<br>
2. [Speechnotes Speech to Text (для голосового ввода)](https://chrome.google.com/webstore/detail/speechnotes-speech-to-tex/nncconplehmbkbhkgkodmnkfaflopkji)<br><br>


-Далее необходимо зайти на сайт сервиса и открыть первое расширение. В появившееся окно необходимо вставить скрипт для соответствующего сайта, написанный на JS (находится в папке voice_film_searhcer, открыть можно в блокноте) и нажать кнопку Save (сохранить). Проверить, что все правильно, можно сочетаниями клавиш на сайте того же кинопоиска: Ctrl + Alt + Shift + S - воспроизведение (на странице фильма/сериала). Ctrl + Alt + Shift + A - открыть строку поиска. Ctrl + Alt + D-K, Z-N - выбирает номер фильма в списке выдачи (1-12 - LordFilm, HDRezka, 1-8 - YouTube, 1-6 - Kinopoisk, IVI). После того, как убедились, что все работает, необходимо зайти в дополнения браузера и изменить сочетание клавиш для активации Speechnotes. В AHK скрипте это Alt + S. После того, как все настроили - можно приступать к использованию.<br>
-На загрузку сайта сервиса отводится 10 секунд.<br>
-Далее будет открыто поле ввода и можно будет приступать говорить.<br>
-На запрос отводится 5 секунд.<br>
-После запроса скрипт будет ждать 2 секунды, пока прогрузится список фильмов. Затем необходимо будет выбрать номер фильма в списке, после чего откроется его страница.<br><br>

Для того, чтобы запустить фильм, можно использовать команды:<br>
- Включи<br>
- Включай<br>
- Смотреть<br><br>


-Для нового запроса - произнесите ***"новый запрос"***<br>
-Для выбора фильма из списка - произнесите ***"номер" + [номер фильма (1-12 - LordFilm, HDRezka, 1-8 - YouTube, 1-6 - Kinopoisk, IVI)]***<br>
-После этого, все управление будет производиться стандартными скриптами из папки multimedia.<br>
Приятного пользования!<br><br>


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
