let bubble = document.querySelector('.bubble');
let exit = document.querySelector('.exit');
let livechat = document.querySelector('.livechat');

bubble.addEventListener('click', () => {
  livechat.classList.add('animate-chat')
});