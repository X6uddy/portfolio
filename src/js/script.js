const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


//Line progress
const percents = document.querySelectorAll('.tecnology__progress__percent'),
      class_per = document.querySelectorAll('.tecnology__progress__line1');

percents.forEach((item, i) => {
    class_per[i].style.width = item.innerHTML;
})
