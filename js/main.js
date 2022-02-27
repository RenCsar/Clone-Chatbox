let btOpen = document.getElementById('bt-open')
let btClose = document.getElementById('bt-close')
let btPai = document.getElementById('bt-pai')
let livechat = document.querySelector('.livechat')
let send = document.querySelector('.enviar-container')
let texting = document.querySelector('.texting')
let clip = document.querySelector('#clip-container')

btOpen.addEventListener('click', () => {
  livechat.classList.add('active-chat')
  livechat.classList.remove('desactive-chat')
  btOpen.classList.add('sumir-balao')
  btPai.classList.remove('bt-pai')
})

btClose.addEventListener('click', () => {
  livechat.classList.add('desactive-chat')
  livechat.classList.remove('active-chat')
  btOpen.classList.remove('sumir-balao')
  btPai.classList.add('bt-pai')
})

texting.addEventListener('input', () => {
  if (texting.value.length > 0) {
    send.classList.remove('enviar-hide')
    clip.style.display = 'none'
  } else {
    send.classList.add('enviar-hide')
    clip.style.display = 'flex'
  }
})
