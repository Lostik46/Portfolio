// Инициализация элементов навигации
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Обработчик клика по бургер-меню
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove('active');
        burger.textContent = '☰';
    }
}); 