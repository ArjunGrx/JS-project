let isStatus = document.querySelector('h5');

let friendStatus = document.querySelector('.add');

let check = 0;

friendStatus.addEventListener("click",function(){
 if (check == 0){
  isStatus.innerText = 'Friends';
  friendStatus.innerText = 'Remove Friend';
  isStatus.style.color
  check = 1;
 }
 else{
  isStatus.innerText = 'Stranger';
  friendStatus.innerText = 'Add Friend';
  check = 0;
 }


})