// Dark Mode

const moon = document.querySelector('#moon');
const logo = document.querySelector('#logo');

moon.addEventListener('click', function (event) {
    event.preventDefault();
    if (document.querySelector('head link[href="variable.css"]')) {
        // Mode Dark
        const linkCSS = document.querySelector('head link[href="variable.css"]');
        linkCSS.href = `variableDarkMode.css`;
        moon.src = 'images/soleil.png';
        logo.src = 'images/logo-blanc.png';
    } else {
        // Mode normal
        const linkCSS = document.querySelector('head link[href="variableDarkMode.css"]');
        linkCSS.href = `variable.css`;
        moon.src = 'images/ci_moon.png';
        logo.src = 'images/logo_black.png';
    }
});



const btnFilters = document.querySelectorAll('.categorie button');
console.log(btnFilters);

const projetELts = document.querySelectorAll('.work article');
console.log(projetELts);

// function
function onClickBtn() {
    console.log('ok');
    // Gestion de la class active
    for (let btn of btnFilters) {
        btn.classList.remove('active');
    }
    this.classList.add('active');

    // Gestion du tri
    let filter = this.getAttribute('data-filter');
    console.log(filter);

    for (let projet of projetELts) {
        projet.classList.remove('hide');
        if (filter != '*' && !projet.classList.contains(filter)) {
            projet.classList.add('hide');
        }
    }
}
for (let btn of btnFilters) {
    btn.addEventListener('click', onClickBtn);
}

// GSAP-MIN
gsap.from('.tete', {
    opacity: 0,
    duration: 2,
    delay: .5,
    x: 60
})
gsap.from('.bloc-texte', {
    opacity: 0,
    duration: 2,
    delay: .8,
    y: 25
})
gsap.from('.black-line, #salut, #nom-prenom, #metier', {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: 25,
    ease: 'expo.out',
    stagger: .2
})
gsap.from('.logo-black', {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    y: 25,
    ease: 'expo.out',
    stagger: .2
})
gsap.from('nav a', {
    opacity: 0,
    duration: 2,
    delay: 1.8,
    y: 25,
    ease: 'expo.out',
    stagger: .2
})

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("custom-slider");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     // slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }