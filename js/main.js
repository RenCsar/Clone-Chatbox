let bubble = document.querySelector('.container-bubble');
let balao = document.querySelector('.bubble');
let x = document.querySelector('.x-close');
let livechat = document.querySelector('.livechat');

bubble.addEventListener('click', () => {
  livechat.classList.toggle("animate-chat");
  balao.classList.toggle("sumir-balao");
  x.classList.toggle("chat-fechado");
});
