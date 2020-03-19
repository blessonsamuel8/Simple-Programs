var c = 10;
var t;
var timer_is_on = 0;
function timedCount() {
    document.getElementById("txt").value = c;
    c = c - 1;
        if(c==-1){
            document.getElementById("txt").value = "Happy Newyear";
            document.getElementById("fw").src="firework.gif";
            return;
        }
    t = setTimeout(timedCount, 1000);
}
timedCount();