// обьявляем переменные с которыми мы будем работать
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const arrPrev = document.getElementById('arr-prev');
const arrNext = document.getElementById('arr-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// задаем начало нашего слайдера
let index = 0;
// две функции основные
//  тут функция принимает значение n, функция которая ставит активный слайд
const activeSlide = n => {
    // console.log(n);
    for (slide of slides) {
        slide.classList.remove('active');
    }
    // добавление к текущему слайду n класс
    slides[n].classList.add('active');
}

const activeDot = n => {
    // console.log(n);
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

// const prepareCurrentSlide = ind => {
//         activeSlide(ind);
//         activeDot(ind);
//     }
// обычная стрелочная функция, учесть логику что слайды кончаются то с последнего мы на первый переключаемся, слайдер цикличный
const nextSlide = () => {
        // проверка,отчет в массиве начинается с 0, обычный отчет в программировании
        if (index == slides.length - 1) {
            index = 0;
            //2 когда меняем индекс мы вызываем функцию, в качестве аргумента пишем index 
            activeSlide(index);
            activeDot(index);
        } else {
            // показываем программе перепрыгни через 1
            index++;
            // 2
            activeSlide(index);
            activeDot(index);
        }
    }
    // тут проверяем не первый ли это слайд
const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {        
        activeSlide(indexDot);
        activeDot(indexDot);
    })
})


//  показываем какое событие мы будем прослушивать. первым аргументом
next.addEventListener('click', nextSlide);
arrNext.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
arrPrev.addEventListener('click', prevSlide);


// автоматическое переключение слайдов
setInterval(nextSlide, 5000);