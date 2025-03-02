// date 
let mainDate=document.querySelector('#mainDate');
let myDate=new Date();
let date=myDate.toLocaleDateString('en-US',{
    month: 'long',
    day:'numeric',
    year:'numeric',
})
mainDate.innerText=date;
// week name
let weekName=document.querySelector('#weekName');
let myWeekName=new Date();
let week=myWeekName.toLocaleDateString('en-US',{
    weekday:'long',
})
weekName.innerText=week;