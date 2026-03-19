$(function(){

    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 1000,
        });
  
    } else {
        
        sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 1000,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 1000,
        });
  
    }
    
    sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 1000,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 1000,
        });
  
  
  });

const erasTitles = ["Todos", "Precambrico", "Paleozoico", "Mesozoico", "Cenozoico"];

let currentIndex = 0;

const title = document.querySelector('.title-time h1')
const prevBtn = document.querySelector('.previus-time'); 
const nextBtn = document.querySelector('.next-time'); 
const allCards = document.querySelectorAll(".timeline-item");

function updateView() {
  title.textContent = erasTitles[currentIndex];

  allCards.forEach(div => {
    div.style.display = div.classList.contains(erasTitles[currentIndex].toLowerCase())
      ? ""
      : "none";
    
    if(title.textContent === "Todos"){
      div.style.display = "";
    }
  });

  window.dispatchEvent(new Event('resize'));
}
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= erasTitles.length) {
    currentIndex = 0;
  }
  updateView();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = erasTitles.length - 1;
  }
  updateView();
});

updateView();


const containers = document.querySelectorAll('.audio-container');

containers.forEach(container => {
  const audio = container.querySelector('audio');
  const boton = container.querySelector('.button-play-pause i');

  container.querySelector('.button-play-pause').addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      boton.classList.remove('fa-play');
      boton.classList.add('fa-pause');
    } else {
      audio.pause();
      boton.classList.remove('fa-pause');
      boton.classList.add('fa-play');
    }
  });

  audio.addEventListener('ended', () => {
    boton.classList.remove('fa-pause');
    boton.classList.add('fa-play');
  });
});