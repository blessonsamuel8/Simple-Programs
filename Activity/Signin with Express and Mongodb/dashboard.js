var a=[];
var b=[];
var j=0;
var sub=[];
var json=fetch("http://localhost:3000/data");
sub = Object.keys(json).map((key) => json_data[key]);
load();
for(let i=1;i<=9;i++){
    a.push("groc"+i);
    b.push("img"+i);
}

function submit(){
    var addgroc = document.getElementById("addgroc").value;
    if(addgroc!=""){
        sub.push(addgroc)
        document.getElementById("addgroc").value=""
        load();
        j++
    }
    document.getElementById("addgroc").focus();
}
function load() {
    let q={}
    for(let k=0;k<sub.length;k++){
        document.getElementById(a[k]).innerHTML = sub[k];
        document.getElementById(b[k]).src = "delete.png";
        q[k+1] = sub[k];
    }
    jsondata=q;
    console.log(jsondata);
    fetch("http://localhost:3000/update", {
        method : "POST",
        headers : header,
        body : JSON.stringify(jsondata)
    }).then(data => console.log(data))
}

function del(id){
    document.getElementById(b[j-1]).src="";
    document.getElementById(a[j-1]).innerHTML="";
    var ind = b.indexOf(id);
    sub.splice(ind,1);
    load();
    j--;
    document.getElementById("addgroc").focus();
}
function clr(){
//    location.reload(true);
    for(let k=sub.length-1;k>=0;k--){
    document.getElementById(a[k]).innerHTML = "";
    document.getElementById(b[k]).src = "";
    sub.pop();
    j--;
    }
    document.getElementById("addgroc").focus();
}

addEventListener("keyup", (event) => {
    if(event.keyCode===13){
        document.getElementById("btn").click();
    }
})
