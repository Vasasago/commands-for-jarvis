Send, {Ctrl Down}&{Shift Down}&{Alt Down}&{A}{Ctrl Up}{Shift Up}{Alt Up}

Loop, 100
{
	Send, {Right}
}

Loop, 100
{
	Send, {Backspace}
}

SoundBeep, 350, 100
SoundBeep, 500, 100

Send, {Alt Down}
Send, s
Send, {Alt Up}

sleep 5000

Send, {Alt Down}
Send, s
Send, {Alt Up}

Send, {Space}
Send, {Enter}

SoundBeep, 500, 100
SoundBeep, 350, 100