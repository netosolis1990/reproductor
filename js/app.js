var i;
var canciones;
$(document).ready(function() {
	canciones = new Array('http://srv46.vidtomp3.com/download/4pmZam1noWZtr6yq3JeZtGpkmWdnZm9plpvfjqKU3KGho2w=/The%20Killers%20-%20Shot%20At%20The%20Night.mp3',
		'http://www.mfiles.co.uk/mp3-downloads/book1-prelude02.mp3',
		'http://srv49.vidtomp3.com/download/4puWcWms26SqZ3K0l5eUbWxjmWRsaLWOz8fXp6agmw==/The%20Killers%20-%20Human.mp3',
		'http://lb-699081a5.aclst.com/dl.php/zc8hbSM1zVo/The%20Killers%20-%20Read%20My%20Mind.mp3?video_id=zc8hbSM1zVo&t=emM4aGJTTTF6Vm8tMzE0Nzc2MzcwOC0xNDE1MzI0MTU2LTI5MDc5Nw%3D%3D&exp=10-11-2014&s=adb9bf00b030e39355f18209df0050b4');
	player.src = canciones[0];
	i = 0;
});

function backSong(){
	if(i==0)i = canciones.length -1;
	else i--;
	player.src = canciones[i];
	player.load();
	player.play();
}

function nextSong(){
	if(i== canciones.length -1)i = 0;
	else i++;
	player.src = canciones[i];
	player.load();
	player.play();
}