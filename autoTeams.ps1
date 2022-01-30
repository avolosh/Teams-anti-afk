Add-Type -AssemblyName System.Windows.Forms
$sleeptime = 5 * 60
while($true){
  [System.Windows.Forms.SendKeys]::SendWait("{F13}")
  Start-Sleep -Seconds $sleeptime
}
