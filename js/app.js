const closeButton = document.getElementsByClassName("closebtn");
const catFish = document.querySelector('.catfish');
closeButton[0].addEventListener('click', close);
function close(){
        catFish.classList.toggle('closed');
}
