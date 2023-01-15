const newTimerValue=document.querySelector(".new_timer input");
const newTimerButton=document.querySelector(".add_timer");
const listTimer=document.querySelector(".all_timer_running");
const completedTimer=document.querySelector(".all_timer_completed");

//variable for close function 
let sub_cls_close_btn="";
let main_cls_close_btn="";
let timer_original_value="";

// var timer_no=0;
let timer_no=0;
newTimerButton.addEventListener("click", addTimer);

//callback function to add timer

let timer_interval="";

function addTimer(){

    if (newTimerValue.value >0){
    
    //Start time detail 
    const d_start=new Date();
    
    const timer_start_time=`${d_start.toDateString()} : 
    ${d_start.toLocaleTimeString()}`;
    timer_no=timer_no+1;
    const liClassName="li_running_timer_"+timer_no;
      
    //create list component for full timer clock with start PerformanceTiming, timer and control button 
    const liTimer= document.createElement("ul");
    liTimer.innerHTML=`Timer :  ${timer_no}
                    <li class="li_timer_header">Timer Starts at:   ${timer_start_time} </li> 
                    <li class="li_timer_detail" > ${newTimerValue.value} </li>
                    <li class="li_timer_footer"> </li>
                    <li class="li_timer_control" > 
                        <button class="timer_close">Close</button>
                    </li>`;
    liTimer.classList.add(liClassName);
    listTimer.appendChild(liTimer);

    //define div to contain timer section
    let timerDetail=document.querySelector(`.${liClassName} .li_timer_detail`);
    let timerFooter=document.querySelector(`.${liClassName} .li_timer_footer`);
    
    let timer_original_value=newTimerValue.value;
    let time=timer_original_value*60;
    
    //set interval for every 1 sec to update timer value 
    let timer_interval= setInterval(countDown,1000);
    

    //function countdown
    function countDown(){
        
            //time in minutes
            const  minutes=Math.floor(time/60);
            //reaming seconds 
            let seconds=(time) % 60;

            if (time<=0){
                
                timerDetail.innerHTML= ` ${timer_original_value} : 00  Minutes`
                const d_end=new Date();
                const timer_end_time=`${d_start.toDateString()} : 
                ${d_start.toLocaleTimeString()}`;
                //add time detail when timer stopped in div 
                timerFooter.innerHTML="Timer Stopped at : "+timer_end_time;
                // listTimer.removeChild(liTimer);
                completedTimer.appendChild(liTimer);
                clearInterval(timer_interval)
                
            }else{  
                // console.log(time);//need some global value to update div status   
                timerDetail.innerHTML= ` ${minutes} : ${seconds} Minutes`
                time--;
            };
        
    };
    newTimerValue.value =""
    }else{
        console.log("Please provide input in minutes");
        alert("Please provide input in minutes");
    };
};

//Close btn  // click has to be in small letter 
listTimer.addEventListener("click", (e) => {    
    let cls_close_btn=e.target.classList;
    let main_cls_close_btn=e.target.parentNode.parentNode.classList;
    let main_div=listTimer;
    close(main_div,main_cls_close_btn,cls_close_btn,);
    
   
});


//Close btn  // click has to be in small letter 
completedTimer.addEventListener("click", (e) => {
    let cls_close_btn=e.target.classList;
    let main_cls_close_btn=e.target.parentNode.parentNode.classList;
    let main_div=completedTimer;
    close(main_div,main_cls_close_btn,cls_close_btn,timer_interval);
   
});

function close(main_div,main_cls_close_btn,cls_close_btn){
  
    if (document.querySelector(`.${cls_close_btn.value}`).innerHTML=="Close"){
         main_div.removeChild(document.querySelector(`.${main_cls_close_btn.value} .${cls_close_btn.value}`).parentNode.parentNode);
    }
};

