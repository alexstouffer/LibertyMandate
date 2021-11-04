$ticks = [System.DateTime]::Now.Ticks
Invoke-RestMethod -Uri "https://tts0npyxgc.execute-api.us-west-1.amazonaws.com/prod/save" -Method Post -Body "{`"email`":`"$ticks@gmail.com`"}"