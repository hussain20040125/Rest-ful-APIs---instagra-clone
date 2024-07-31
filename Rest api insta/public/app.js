
let btn = document.querySelectorAll(".follow");
let click = 0;
btn.forEach(e => {
    // console.log(e)
    e.addEventListener("click",()=>{
        if(click == 0){
            e.innerHTML="Following";
            e.style.backgroundColor = 'rgb(15, 15, 15)';
            e.style.border = '0.5px solid white';
            click = 1;
        }else{
            e.innerHTML="Follow";
            e.style.backgroundColor = 'rgb(14, 119, 240)';
            e.style.border = 'none';
            click = 0;   
        }
    })
});

