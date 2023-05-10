Run, "https://hd.ixfilm.org"

sleep 10000

Send, {Ctrl Down}&{Shift Down}&{Alt Down}&{A}{Ctrl Up}{Shift Up}{Alt Up}
Send, {Ctrl Down}&{Shift Down}&{Alt Down}&{A}{Ctrl Up}{Shift Up}{Alt Up}
Send, {Ctrl Down}&{Shift Down}&{Alt Down}&{A}{Ctrl Up}{Shift Up}{Alt Up}

sleep 1000

SoundBeep, 350, 100
SoundBeep, 500, 100

Send, {Space}

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

sleep 5000

Loop, 15 
{
	Send, {Down}
}