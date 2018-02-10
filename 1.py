#!/usr/bin/python
# -*- coding: utf-8 -*-

import cgi, cgitb, os, sys
from bs4 import BeautifulSoup
import string
import random
reload(sys)
sys.setdefaultencoding('UTF-8')



path  = '/var/www/html/upload/'
files = os.listdir(path)





print 'Content-Type: text/html; charset=UTF-8'
print
print '''
<!DOCTYPE html>
<link rel="stylesheet" type="text/css" href="http://127.0.0.1/style.css">

<body>
  <title>Upload File</title>
  <audio hidden id="aplayer" controls>
</audio>

  <div class = "box">
  <div class =aline> </div>
    <div id =nowplay class = "nowplay"> True Detective - Intro / Opening Song - Theme (The Handsome Family - Far From Any Road)  Now Playing... </div>
  <button id = "ply" class="plybtn" onclick="playb()"> <img src=http://94.54.178.57/play.png></button>
  <div onclick=getpos(event) onmousedown=funcstart() onmousemove=func(event) onmouseup=funcstop() id="duratline" class= "durationline">
 <div class=selectedduration></div> 
  <div onmousemove=selecthov(event)  onmouseout="outhover()" onclick=outhover() id = "point" class= "pointer">

    <div id = "time" class="timec">0:00</div>

  </div>
</div>

  <button id = "mutebtn" class="plybtn1" onclick="muteb()"> <img src=http://94.54.178.57/loud.png></button>

    <div id = "vol" onclick ="volumechng(event)" class="volume"> <div id ="volpoint" class = "volumepointer"> </div></div>



</div>

'''

for x in files:
    xa = 'http://127.0.0.1/upload/'+x
    xa = xa.replace(' ','%20')
    x = x.replace('.mp3','')
    print '<div onclick=play(c="'+xa+'") class=list><a onclick =play(c="'+xa+'") href=#><b id=namet >' +x+ '</b></a></div>'
print'''

</body>
<script src = "http://127.0.0.1/player.js"></script>


</html>
'''
