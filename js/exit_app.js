const exitBtn=document.querySelector(".close_app_btn");
const body=document.querySelector("body");



exitBtn.addEventListener("click",()=>{
 
    if (exitBtn.innerHTML="Exit Application"){
        close_application();
    }else if(exitBtn.innerHTML="Start"){

    };
   

})

function close_application(){
    body.innerHTML=
    `
    <h1 class="welcome_msg_h">Thanks for using Multiple Timer Application
    <h3> Have a nice day </h3>
    </h1>
    <h3 class="welcome_msg_b"> Restart Multiples Timer Application please press start.. </h3>
    <button class="close_app_btn"> 
    <a href="index.html">Start</a></button>
    `
}


