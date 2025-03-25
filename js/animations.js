// Функция для инициализации анимаций
function initAnimations() {
    // Настройки для Intersection Observer
    const options = {
        root: null, // используем viewport
        rootMargin: '0px', // отступ от viewport
        threshold: 0.1 // элемент считается видимым, когда 10% его площади в viewport
    };

    // Создаем наблюдатель
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Отключаем наблюдение после первого появления
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Находим все элементы для анимации
    const animatedElements = document.querySelectorAll('.fade-in, .work-card, .contact-card, .contact-form, h1, h2');
    
    // Добавляем задержки для последовательного появления
    animatedElements.forEach((element, index) => {
        if (index < 5) { // Максимум 5 задержек
            element.classList.add(`delay-${index + 1}`);
        }
        observer.observe(element);
    });
}

// Запускаем анимации после загрузки страницы
document.addEventListener('DOMContentLoaded', initAnimations); 