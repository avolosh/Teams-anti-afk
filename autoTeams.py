import time, keyboard
from datetime import datetime



sleeptime = 5 * 60

while True:
    if datetime.today().weekday() < 5:
        if int(datetime.now().strftime("%H")) in range(8, 19): # Working hours
            keyboard.send("F13")
            time.sleep(sleeptime)
        else:
            print("Non working time!\Wait for 1 hour")
            time.sleep(3600)
    else:
        print("Weekend!\nWait for 1 hour")
        time.sleep(3600)
