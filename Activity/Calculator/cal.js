class calc{
    constructor(){}
dis(val){
    document.getElementById('display').value+=val
}

clr(){
    document.getElementById('display').value=""
}
bs(){
    let q=document.getElementById('display').value;
    document.getElementById('display').value=q.slice(0,-1);
}
solve(){
    let a=document.getElementById('display').value
    let b=eval(a)
    document.getElementById('display').value=b
}
}
var c= new calc();