import string
import random
import os
import sys
import eyed3
reload(sys)
sys.setdefaultencoding('UTF-8')

 
path  = '/var/www/html/upload'
files = os.listdir(path)

for x in files:
    dpath = path +'/'+ x
    renn = str(''.join(random.choice(string.ascii_letters) + string.digits for x in xrange(1))) + '.mp3'
    audio = eyed3.load(dpath)
    audio.tag.title = unicode(x)
    audio.tag.save()
    os.rename(dpath,path + '/' +renn)
 
    
