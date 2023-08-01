const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Получаем следующий элемент после кнопки (элемент с ответом)
        const answerElement = button.nextElementSibling;

        // Переключаем отображение элемента с ответом и меняем стиль кнопки
        if (answerElement.style.display === 'none') {
            answerElement.style.display = 'block';
            button.textContent = 'Скрыть ответ';
            button.classList.add('active');
        } else {
            answerElement.style.display = 'none';
            button.textContent = 'Показать ответ';
            button.classList.remove('active');
        }
    });
});
