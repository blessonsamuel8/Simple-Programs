var c=0;
class crck{
    constructor(a,b,x,s,o,i){
        this.a=a;
        this.b=b;
        this.x=x;
        this.s=s;
        this.o=o;
        this.i=i;
    }
    bowl(){
        this.b += 1;
        let y=Math.floor(Math.random()*7);
        this.x += y;
        this.s += y;
        document.getElementById(this.a[this.i]).value=this.x;

        if(y==0 || this.b==6){
            this.o +=1;
            this.b = 0;
            this.i += 1;
            this.x=0;
        }

        document.getElementById(this.a[6]).value=this.s;
        console.log(this.s);
        console.log(this.x);
        
        if(this.o==6){
            c += 1;
            this.i=0;
            this.s=0;
        }

    }
}

var team1= new crck(['p1','p2','p3','p4','p5','p6','Score'],0,0,0,0,0);
var team2= new crck(['p12','p22','p32','p42','p52','p62','Score2'],0,0,0,0,0);
function bowl(){
    if(c==0){
        let n=team1.bowl();
        var u=document.getElementById('Score').value
        localStorage.setItem("Score1",u);
    }
    else if(c==1){
        let m=team2.bowl();
        var v=document.getElementById('Score2').value
        localStorage.setItem("Score2",v);
    }
    else{
        alert('Game Over')
        window.location.href = "Result.html";
    }
}
bowl();