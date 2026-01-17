var a=document.querySelector("h3")
var b=document.querySelector("#add")

count=1
b.addEventListener("click",function(){
    if(count==1){
    a.innerHTML="Friends"
    a.style.color="green"
    b.innerHTML="Remove"
    count=0
}else{
    a.innerHTML="Stranger"
    a.style.color="red"
    b.innerHTML="Add Friend"
    count=1
    }
})

