let completeButtons=document.querySelectorAll('.taskCompleteButton');
let taskAssignCounter=document.querySelector('#taskAssignCounter');
let count1=parseInt(taskAssignCounter.innerText);
let navCounter=document.querySelector('#navCounter');
let count2=parseInt(navCounter.innerText);
let historyRecord=document.querySelector('#historyRecordDiv');


for(let completeButton of completeButtons)
{
    completeButton.addEventListener("click",function(event)
{
    let currentTime=new Date().toLocaleTimeString();
    completeButton.innerText='Completed';
    completeButton.style.backgroundColor='#ced6ff';
    completeButton.disabled=true;
    alert("Board Updated Successfully");
    count1-=1;
    count2+=1;
    taskAssignCounter.innerText=count1;
    navCounter.innerText=count2;
    if(count1===0)
    {
        alert("Congrats!!! You have completed all the current tasks");
    }
    
    let taskName=(event.target.parentNode.parentNode.querySelector('.taskName')).innerText;
   
        historyRecord.innerHTML+=`
        <div>
            <p style="background-color: white; padding:10px; border-radius: 10px;margin: 15px;color:#515253; margin-bottom: 20px;">You have completed the task <strong>${taskName}</strong>  at ${currentTime} </p>
          </div>`
    
  
})
}
// clear history
let clearHistoryButton=document.querySelector('#clearHistoryButton');
clearHistoryButton.addEventListener("click",function()
{
    historyRecord.innerHTML='';
})

