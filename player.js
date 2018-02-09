var player = document.getElementById('aplayer');
player.addEventListener("timeupdate", updateplayer, false);
var nowplay = document.getElementById('nowplay');
function play(d){
	nowplay.innerHTML = d
        player.src = c;
        player.load();
        player.play();
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
  
  time.innerHTML = mins + ":" + secs;
  point.style.marginLeft = percent + "%";
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


function updateplayer() {
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

  time.innerHTML = mins + ":" + secs;
  point.style.marginLeft = percent + "%";


}

duratline.addEventListener("click",getpos(event));

function getpos(event){
  var he = document.getElementById("point");
  var x = event.clientX;
  var player = document.getElementById("aplayer");
  var durat = player.duration;
  var y = screen.width ;
  var z = parseInt(x/(y/100));
  player.currentTime = parseInt(durat) * (z/100)   ;
  player.play();

}


vol.addEventListener("click",volumechng(event));
function volumechng(event){
  var volum = document.getElementById("vol");
  var post = volum.offsetWidth;
  var clickp = event.clientX;
  var screenw = screen.width;
  var posit = screenw - clickp;
  var pointvol = document.getElementById("volpoint");
  var player = document.getElementById("aplayer");
  var diff = screenw - post;
  var varr = screenw - diff;
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

  pointvol.style.width = theend +105 + "%";
  var the = a + "." + (th);
  player.volume = the;
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


