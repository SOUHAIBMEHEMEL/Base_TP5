var connecterBtn = document.getElementById('connecterBtn');
var signInForm = document.getElementById('SignInContainer');
var signInCancelBtn= document.getElementById('SignInCancelBtn');


connecterBtn.onclick=function () {
    signInForm.style.display='block';
}

signInCancelBtn.onclick=function () {
    signInForm.style.display='none';
}

