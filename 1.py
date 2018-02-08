#!/usr/bin/python
# -*- coding: utf-8 -*-

import cgi, cgitb, os, sys
from bs4 import BeautifulSoup

path = '/var/www/html/upload'
files = os.listdir(path)
c = 0




        




print 'Content-Type: text/html; charset=UTF-8'
print
print '''
<html>
<script>
function play(c){
        alert(c);
        player = document.getElementById("aplayer");
        player.src = c;
        player.load();
        player.play();
        alert(c);
        }
</script>
<head>
  <title>Upload File</title>
  <p> Welcome </p>
  <audio id='aplayer' controls></audio>
'''
for x in files:
    x = 'http://127.0.0.1/upload/'+x.encode('ascii','ignore')
    print len(x)
    
    print '<a onclick =play(c="'+x+'") href=#>' + 'changeMusic</a>'
'''
</head>
<body>
'''
