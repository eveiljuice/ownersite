/*=============== СЛАЙДЕР ===============*/
let currentSlide = 0;
const slides = document.querySelectorAll(".slider__slide");
const paginationButtons = document.querySelectorAll(".pagination__button");

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  paginationButtons[currentSlide].classList.remove("active");
  currentSlide = index;
  slides[currentSlide].classList.add("active");
  paginationButtons[currentSlide].classList.add("active");
}

// Инициализация первого слайда и кнопки как активных
showSlide(0);


/*=============== ЗАГРУЗОЧНЫЙ ЭКРАН ===============*/
window.addEventListener("load", () => {
    document.querySelector(".loading-screen").style.display = "none";
  });
  


/*=============== ВЫДВИЖНОЕ МЕНЮ ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*=============== ОТКРЫТОЕ МЕНЮ ===============*/
if (navToggle) {
    navToggle.addEventListener('click', (event) => {
        navMenu.classList.add('show-menu')
    })
}


/*=============== ЗАКРЫТОЕ МЕНЮ ===============*/
if (navClose) {
    navClose.addEventListener('click', (event) => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== ВЫДВИЖНОЕ МЕНЮ MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classListList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS  ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }    
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
 calculateCm = document.getElementById('calculate-cm'),
 calculateKg = document.getElementById('calculate-kg'),
 calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()

    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        
        calculateMessage.textContent = 'Fill in the Height and Weight'
    

setTimeout(() =>{
    calculateMessage.textContent = ''
        }, 3000) 
    } else{
        const cm = calculateCm.value / 100,
        kg = calculateKg.value,
        bmi = Math.round(kg / (cm * cm))
       
        if(bmi < 18.5){
        calculateMessage.classList.add('color-green') 
        calculateMessage.textContent = `Ваш ИМТ ${bmi} и вы немного ХУДОЙ((`
        } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Ваш ИМТ ${bmi} и вы в НОРМЕ`
        } else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Ваш ИМТ ${bmi} и у вас есть лишний ВЕС`
        }    

    }    
}
calculateForm.addEventListener('submit', calculateBmi)


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user');
      
const sendEmail = (e) => {
    e.preventDefault();

    if (contactUser.value === '') {
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');
        contactMessage.textContent = 'Вы должны ввести свою почту';

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 3000);
    } else {
        emailjs.sendForm('service_efov4bg', 'template_zp7wpt9', '#contact-form', 'qrk_mI8JZWA5G29PM')
            .then(() => {
                contactMessage.classList.remove('color-red');
                contactMessage.classList.add('color-green');
                contactMessage.textContent = 'Вы успешно зарегистрировались!';
                
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 3000);
            })
            .catch((error) => {
                contactMessage.classList.remove('color-green');
                contactMessage.classList.add('color-red');
                contactMessage.textContent = 'НЕПРАВИЛЬНАЯ ПОЧТА!';
                console.error('Ошибка:', error);
            });
    }
};

contactForm.addEventListener('submit', sendEmail);

