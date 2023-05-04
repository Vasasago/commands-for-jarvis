RegRead, BrowserKeyName, HKEY_CURRENT_USER, Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.html\UserChoice, Progid
RegRead, BrowserFullCommand, HKEY_CLASSES_ROOT, %BrowserKeyName%\shell\open\command
StringGetPos, pos, BrowserFullCommand, ",,1
pos := --pos
StringMid, BrowserPathandEXE, BrowserFullCommand, 2, %pos%
Run, % BrowserPathandEXE




Run, "https://hd.kinopoisk.ru"

sleep 5000

Send, {Ctrl Down}&{Shift Down}&{Alt Down}&{A}{Ctrl Up}{Shift Up}{Alt Up}
Send, {Ctrl Down}&{Shift Down}&{Alt Down}&{A}{Ctrl Up}{Shift Up}{Alt Up}

sleep 1000

Send, {Alt Down}
Send, s
Send, {Alt Up}

sleep 5000

Send, {Alt Down}
Send, s
Send, {Alt Up}

Send, {Space}

sleep 2000

Send, {Ctrl Down}&{Alt Down}&{Shift Down}
Send, d
Send, {Ctrl Up}{Alt Up}{Shift Up}