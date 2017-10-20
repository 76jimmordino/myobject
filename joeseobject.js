function cellphone(s,m){
  this.service= s;
  this.memory= m;

  this.totalmemory= function(appsize){

    this.memory=  this.memory-appsize;

  };

}
function main(){
  let iphone = new cellphone("verizon",16);
  console.log(iphone.totalmemory(4));

}
main();
