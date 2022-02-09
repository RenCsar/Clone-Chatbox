let bubble = document.querySelector('.container-bubble');
let balao = document.querySelector('.bubble');
let x = document.querySelector('.x-close');
let livechat = document.querySelector('.livechat');
let send = document.querySelector('.enviar-container');
let texting = document.querySelector('.texting');
let clip =document.querySelector('#clip-container');


bubble.addEventListener('click', () => {
  livechat.classList.toggle("animate-chat");
  balao.classList.toggle("sumir-balao");
  x.classList.toggle("chat-fechado");
});

texting.addEventListener('input', () => {  
  if(texting.value.length > 0){
  send.classList.remove("enviar-hide");
  clip.style.display="none";
  }
  else {
  send.classList.add("enviar-hide");
  clip.style.display="flex"; 
  }
});