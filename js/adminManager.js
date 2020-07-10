var menuElement= document.getElementsByClassName('menuBtn');
var element = document.getElementsByClassName('element');

for(let j=0; j<menuElement.length;j++){
    menuElement[j].onclick = function () {
        for (let i = 0; i < element.length; i++){
            element[i].style.display = "none";
            menuElement[i].style.borderLeft = '10px solid transparent';
            menuElement[i].style.backgroundColor='transparent';
        }
        element[j].style.display = "block";
        menuElement[j].style.borderLeft = '10px solid #fff';
        menuElement[j].style.backgroundColor='rgba(250,250,250,.2)';
    };

}