import keyboard, time
from datetime import datetime
sleeptime = 5*60
while True:
    if not datetime.today().weekday() in [5, 6]: # Working days
        if int(datetime.now().strftime("%H")) in [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]: # Working hours
            keyboard.send("F13")
            time.sleep(sleeptime)
        else:
            print("Non working time!\Wait for 1 hour")
            time.sleep(3600)
    else:
        print("Weekend!\nWait for 2 hours")
        time.sleep(2*3600) # Sleep for 1 hour
