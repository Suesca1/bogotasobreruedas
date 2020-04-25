const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
   const anchofondo = (window.pageYOffset/ altura) * 900;
   if(anchofondo <= 110) {
    fondo.style.width = anchofondo +'%';
   }
   
}