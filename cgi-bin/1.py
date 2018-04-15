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

ab = 0



print 'Content-Type: text/html; charset=UTF-8'
print
print '''
<!DOCTYPE html>
<link rel="stylesheet" type="text/css" href="http://127.0.0.1/style.css">




<body>
  <title>Upload File</title>
  <audio onended=nextrack() hidden id="aplayer" controls>

</audio>
  <meta name="viewport" content="width=device-width, initial-scale=1">

<div class = "box">
    <div class =aline> </div>
    <div id =nowplay class = "nowplay"> True Detective - Intro / Opening Song - Theme (The Handsome Family - Far From Any Road)  Now Playing... </div>
    <img  src=http://127.0.0.1/pause.png id = "ply" class="plybtn" onclick="playb()"> 
    <img onmouseout = loophovout() onmouseover=loophov() src=http://127.0.0.1/loop.png id = "loop" class="loopbtn" onclick="loop()">
    <div id = "time" class="timec">0:00</div>

    <div onclick=getpos(event) onmousedown=funcstart() onmousemove=func(event) onmouseup=funcstop() id="duratline" class= "durationline">
  <div class=selectedduration></div> 
        <div onmousemove=selecthov(event)  onmouseover=selecthov(event) onmouseout="outhover()" onclick=outhover() id = "point" class= "pointer">


        </div>
  </div>
    <div id = "timed" class="timed">0:00</div>

    <img  id = "mutebtn" class="volbtn" onclick="muteb()" src=http://94.54.178.57/loud.png>
    <div id = "vol" onclick ="volumechng(event)" class="volume"> <div id ="volpoint" class = "volumepointer"> </div></div>
    <div style=margin-top:40px class=aline></div>
    <span id=tooltipid class =tooltip></span>
</div>

<div class = header> 
    <div onclick="changePage(event,'home')"class=headeritem ><a href=#>Home</a></div>
    <div onclick="changePage(event,'list')"class=headeritem ><a href=#>List</a></div>
    <div onclick="changePage(event,'list')"class=headeritem ><a href=#>Recent</a></div>
</div>

<div id=list class=box2>
<p style=margin:0px;text-align:center;color:black;background:gold;> List </p> 
'''
xe = len(files)
for x in files:
    ab = ab + 1 
    xa = 'http://127.0.0.1/upload/'+x
    xa = xa.replace(' ','%20')
    xa = xa.replace('#','%23')
    x = x.replace('.mp3','')
    x = str(ab) + ' - ' + x
    print '<div data="'+str(xe)+'" name="'+str(ab)+'" id="'+xa+'" href="'+x+'" onclick=play(c="'+xa+'") class=list><a onclick =play(c="'+xa+'") href=#><b tid ="'+x+'" id=namet >'+x+'</b></a></div>'
print'''
<div id=lasttrack data='''+str(xe)+'''></div>
</div>
</body>
<script src = "http://127.0.0.1/player.js"></script>


</html>
'''
