let themeChangerButton=document.querySelector('#themeChangerButton');
themeChangerButton.addEventListener("click",function()
{
    // console.log("button has been clicked");
    let randomNum= Math.floor(Math.random()*16777215);
    let randomCode="#"+randomNum.toString(16);
    // console.log(randomCode);
    document.body.style.backgroundColor=randomCode;
})