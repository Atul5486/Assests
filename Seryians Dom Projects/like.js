var con= document.querySelector("#container");
var love=document.querySelector("#love")
var love1=document.querySelector("#love1")
var love2=document.querySelector("#love2")
con.addEventListener("dblclick",function(){
    love.style.transform="translate(-50%,-50%) scale(1)";
    love.style.opacity=0.8

    setTimeout( function(){
        love.style.opacity=0;
    },1000);
    setTimeout( function(){
        love.style.transform="translate(-50%,-50%) scale(0)";
    },2000);
    if(count==1){
        love2.style.opacity=1
        count=0
    }
})
var count=1
love2.addEventListener("click",function(){
    love.style.transform="translate(-50%,-50%) scale(1)";
    love.style.opacity=0.8
   

    setTimeout( function(){
        love.style.opacity=0;
    },1000);
    setTimeout( function(){
        love.style.transform="translate(-50%,-50%) scale(0)";
    },2000);
})

love2.addEventListener("click",function(){
    if(count==1){
        love2.style.opacity=1;
        count=0
    }else{
        love2.style.opacity=0
        count=1
        love.style.opacity=0
    }
})
