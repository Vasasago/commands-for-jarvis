Send, {Ctrl Down}&{Shift Down}&{Alt Down}&{A}{Ctrl Up}{Shift Up}{Alt Up}

SoundBeep, 350, 100
SoundBeep, 500, 100

Send, {Alt Down}
Send, s
Send, {Alt Up}

sleep 5000

Send, {Alt Down}
Send, s
Send, {Alt Up}

Send, {Enter}

SoundBeep, 500, 100
SoundBeep, 350, 100

sleep 5000

Loop, 15 
{
	Send, {Down}
}