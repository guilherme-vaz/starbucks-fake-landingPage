const imgSlider = (anything) => {
    document.querySelector('.starbucks').src = anything;
}

const changeCircleColor = (color) => {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


//Menu
const toggleMenu = () => {
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}