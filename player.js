var player = document.getElementById('aplayer');
player.addEventListener("timeupdate", updateplayer, false);
var nowplay = document.getElementById('nowplay');
var lock = false;


function play(d){
	var nametrack = document.getElementById('namet').innerHTML
	var player = document.getElementById('aplayer');
	nowplay.innerHTML = nametrack + (' Now Playing...');
        player.src = c;
        player.load();
        player.play();
}

function funcstart(){
	lock = true;

}

function funcstop(){
	lock = false;

}



function func(event){
    if (lock == true){
	var player = document.getElementById('aplayer');
	var duration = player.duration;	
    	var divw = document.getElementById('duratline').offsetWidth;
    	var div2 = document.getElementById('point');
    	var pos = event.clientX - 8;
	var sperc = parseInt(pos / (divw/100));
	var sdurat = parseInt(duration* (sperc/100));
	player.currentTime = parseInt(sdurat) - 15;



	}
}



function playb(){
  var player = document.getElementById("aplayer");
  if (player.paused){
    var btn = document.getElementById("ply");
    btn.innerHTML = "<img src=http://94.54.178.57/pause.png>"
    player.play();

  }
  else{
    var btn = document.getElementById("ply");
    btn.innerHTML = "<img src=http://94.54.178.57/play.png>";
    player.pause();
  }

}


var duratline = document.getElementById('duratline');
duratline.addEventListener("click",getpos);

function getpos(event){
  var he = document.getElementById("point");
  var x = event.clientX - 79;
  var player = document.getElementById("aplayer");
  var durat = player.duration;
  var y = document.getElementById('duratline').offsetWidth
  var z = x / (y/100);
  player.currentTime = durat * (z/100);

  player.play();

}


vol.addEventListener("click",volumechng);
function volumechng(event){
  var al = document.getElementById('nowplay');
  var volum = document.getElementById("vol");
  var post = volum.offsetWidth;
  var clickp = event.clientX;
  var screenw = screen.width;
  var posit = screenw - clickp;
  var pointvol = document.getElementById("volpoint");
  var player = document.getElementById("aplayer");
  var diff = screenw - post;
  var varr = screenw - diff;
  var abc  = clickp/100;
  var varrcli = clickp - screenw;
  var theend = parseInt(varrcli/(varr/100));
  var th = theend + 105;
  if (th > 99) {
    var a = 1;
  }
  else {
    a = 0;
  }
  if (th < 10){
    th = "0" + th;
  }
  else {
    th = th;
  }

  pointvol.style.width = th + "%";
  var the = a + "." + (th);
  player.volume = abc;
  al.innerHTML = the;
}
function muteb(){
  var player = document.getElementById("aplayer");
  
if (player.volume == 1){
  var pointvol = document.getElementById("volpoint");
  pointvol.style.width = 0 + "%";
  player.volume = 0;
  var btnna = document.getElementById("mutebtn");
  btnna.innerHTML = "<img src=http://94.54.178.57/mute.png>";
}
  else{
    var pointvol = document.getElementById("volpoint");
    pointvol.style.width = 100 +"%";
    player.volume = 1;
    var btnna = document.getElementById("mutebtn");
    btnna.innerHTML = "<img src=http://94.54.178.57/loud.png>";
  }
}



var lockhover = false;

function oth(){


}

function selecthov(event){	
	lockhover = true;
	var offset = document.getElementById('duratline').offsetWidth;
	var player = document.getElementById('aplayer');
	var duration = player.duration;
	var durationline = document.getElementById('duratline');
	var pointerhov = document.getElementById('point');
	var timer = document.getElementById('time');
	var x = event.clientX - 79;
	var y = event.clientY - 79;
	if (x < 0){
		x = 0
	}
	var ap = durationline.offsetWidth;
	var sperc = parseInt(x/(offset/100)) ;
	var sstime = duration * (sperc/100);
	var curr = 100 * (player.currentTime / duration);
	var secs = parseInt(sstime % 60);
	var mins = parseInt(sstime / 60 );
	if (secs < 10){
		secs = '0' + secs;
	}
	document.getElementById('tooltipid').style.top = y + 30 + 'px';
	document.getElementById('tooltipid').style.left = x + 60 + 'px';
	document.getElementById('tooltipid').innerHTML = mins +':' +secs +  ' ' + sstime;
	pointerhov.style.background = "linear-gradient(to right,seagreen "+curr+"%,gold "+(curr + 1)+"%,gold "+sperc+"%,  gold "+sperc+"%,white "+sperc+ "%)";
}

function outhover(){
	lockhover = false;
	var pointerhov = document.getElementById('point');
	pointerhov.style.background = "white";
}

function updateplayer(){
        var player = document.getElementById("aplayer");
        var point = document.getElementById("point");
        var duration = player.duration;
        var percent = 100 * (player.currentTime / duration);
        var time = document.getElementById("time")
        var secs = parseInt(player.currentTime % 60);
        var secstomin = parseInt(player.currentTime);
  if (secs < 10){
    secs = "0" + secs
  }

  var mins = parseInt(secstomin / 60);

  time.innerHTML = mins + ":" + secs ;
        if (lockhover == false){
  point.style.background = "linear-gradient(to right, seagreen "+percent+"%,white "+percent+ "%)";

        }
}


