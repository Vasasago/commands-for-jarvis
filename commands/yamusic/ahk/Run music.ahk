Process, Exist, Y.Music.exe
If ErrorLevel = 0
{
; APP IS NOT RUNNING
; Run https://music.yandex.ru/home
Run shell:AppsFolder\A025C540.Yandex.Music_vfvw9svesycw6!App
; Autoplay
sleep 5000
Send, {Ctrl down}p{Ctrl up}
sleep 10

; Open full
Loop, 4
{
Send, {Tab}
sleep 10
}

Send, {Enter}
sleep 1500

Loop, 7
{
Send, {Down}
sleep 50
}

sleep 1000
Send, {Enter}
}
Else
{
; APP IS RUNNING
;MsgBox, Already running
}
Return