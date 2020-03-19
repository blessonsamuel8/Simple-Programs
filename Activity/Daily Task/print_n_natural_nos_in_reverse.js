
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var n=a[0];
  while(n>0){
      console.log(n);
      n-=1;
      
  }
});
