'use strict';

// Typing Effect for Landing Page

const carouselText = [
    {text: "Devin Fledermaus", color: "blue"},
    {text: "A Full Stack Developer", color: "orange"}
  ]
  
  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
  });
  
  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

// Sticky Header JS
window.addEventListener("scroll",function() {
    const header = document.querySelector('.landing-page');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function() {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
}

// Testimonials Page JS
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// Contact Page JS
function activate() {
  let hidden = document.querySelectorAll("#hidden");
  hidden.forEach((poke) => {
    poke.style.display = "block ";
  });
  let button = document.querySelectorAll(".btn");
  button.forEach((btn) => {
    btn.style.display = "none";
  });
}

// Project Page JS
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

  // Filter
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".projects-container").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let x = 0; x < filterButtons.length; x++) {
      filterButtons[x].classList.remove("active")
    }
    this.classList.add("active");
    const target = this.getAttribute("techStack")

    for (let n = 0; n < items.length; n++) {
      items[n].style.display = "none";
      if (target == items[n].getAttribute("techStack")) {
        items[n].style.display = "block";
      }
      if (target == "all") {
        items[n].style.display = "block"
      }
    }
  })
}

// Back to top 
function scrollUp() {
  document.documentElement.scrollTop = 0;
}