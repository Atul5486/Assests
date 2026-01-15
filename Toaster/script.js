function createToaster(config) {
    return function(str){
        let parent = document.querySelector('.parent');
        let toaster = document.createElement('div');
        toaster.className = `child inline-block bg-zinc-500 px-3 py-1 rounded-md p-10 transition-all duration-300`;
        toaster.textContent = str;
        parent.appendChild(toaster);
        if(config.positionX!=="left"|| config.positionY!=="top"){
            parent.className+=`${config.positionX==="right" ? " right-5" : " left-5"} ${config.positionY==="bottom" ? " bottom-5" : "top-5"}`;
        }
        setTimeout(() => {
           parent.removeChild(toaster);
        }, config.duration*1000);
    }
}
let toast = createToaster({ duration: 4, positionY: 'top', positionX: '' });

let count=1;
setInterval(() => {
    if(count<=10){      
          toast("Hii notification");
    toast(`Hii notification from a friend ${count++}`);
    }
}, 1000);