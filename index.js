var a=0;
var y = new Boolean(false);


function call(i){
    setTimeout(function() { 
        if(a==99){
            y=true;
        }else if(a==0){
            y=false;
        }
        if(y==true){
            a--;
        }else{
            a++;
        }
        console.log(a);
        document.getElementById("title").style.backgroundImage=" radial-gradient(circle at center, #00a8cc 0%, #27496d "+a+"%, #112d4e 100%)";
    }, 30*i);
    
}
for(let i=0;i<300;i++){
    call(i);
}   