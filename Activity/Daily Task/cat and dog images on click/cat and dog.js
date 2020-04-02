function catdog(s) {
    var name = prompt("Enter a name");
    var a = document.createElement("img");
    a.src = s;
    a.width = 200;
    document.getElementById("para").appendChild(a);
    a.onclick = function () {
        alert("I am " + name);
    };
}
