var connecterBtn = document.getElementById('connecterBtn');
var signInForm = document.getElementById('SignInContainer');
var signInCancelBtn= document.getElementById('SignInCancelBtn');


connecterBtn.onclick=function () {
    signInForm.style.display='block';
}

signInCancelBtn.onclick=function () {
    signInForm.style.display='none';
}



var menuElement= document.getElementsByClassName('menuBtn');
var element = document.getElementsByClassName('element');

for(let j=0; j<menuElement.length;j++){
    menuElement[j].onclick = function () {
        for (let i = 0; i < element.length; i++){
            element[i].style.display = "none";
            menuElement[i].style.borderBottom = '3px solid transparent';
        }
        //menu_element[j].style.background= "rgba(240,240,240,.2)";
        element[j].style.display = "block";
        menuElement[j].style.borderBottom = '3px solid #2b579a';
    };

}