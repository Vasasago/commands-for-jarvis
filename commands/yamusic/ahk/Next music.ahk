Process, Exist, Y.Music.exe
If ErrorLevel = 0
{
; APP IS NOT RUNNING
}
Else
{
; APP IS RUNNING
;MsgBox, Already running
Run C:\Users\Vassago\PycharmProjects\ChatleyAssistant\YandexMusic
Send, {Ctrl down}f{Ctrl up}
}
Return