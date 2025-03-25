// Инициализация элементов навигации
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links li');

// Функция для анимации пунктов меню
function animateMenuItems(isOpening) {
    menuItems.forEach((item, index) => {
        if (isOpening) {
            item.style.transitionDelay = `${0.1 + index * 0.1}s`;
        } else {
            item.style.transitionDelay = '0s';
        }
    });
}

// Обработчик клика по бургер-меню
burger.addEventListener('click', () => {
    const isOpening = !navLinks.classList.contains('active');
    navLinks.classList.toggle('active');
    burger.textContent = isOpening ? '✕' : '☰';
    animateMenuItems(isOpening);
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove('active');
        burger.textContent = '☰';
        animateMenuItems(false);
    }
});

// Закрытие меню при клике на пункт меню
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.textContent = '☰';
        animateMenuItems(false);
    });
}); 