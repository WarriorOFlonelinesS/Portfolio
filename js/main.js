const portfolioButton = document.querySelectorAll('.portfolio-button'),
      mainContent = document.querySelectorAll(".portfolio-item"),
      iconMenu = document.querySelector('.menu-icon'),
      links = document.querySelectorAll('.menu-link[href^="#"]'),
      menuBody = document.querySelector('.menu-body'),
      prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.item-card')



if(iconMenu){
    iconMenu.addEventListener('click', ()=>{
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
    for(let link of links){
    link.addEventListener('click', () => {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    })
    };
}



for (let item of portfolioButton){

    item.addEventListener('click', () => {


        for (let element of mainContent ){
            element.classList.add("hidden")
        };

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove("hidden");
    })
}

let index = 0

const activeSlide = n =>{
    console.log(index)
    for(slide of slides){
        slide.classList.remove('active');
        console.log(slide)
    }
    slides[n].classList.add('active');
}

const nextSlide = () =>{
    if(index == slides.length - 1){
        index = 0;
        activeSlide(index);
    } else{
        index++; 
        activeSlide(index)
    }
    
}

const prevSlide = () =>{
    if(index == 0){
        index = slides.length - 1
        activeSlide(index);
    } else{
        index--; 
        activeSlide(index)
    }
    
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide)