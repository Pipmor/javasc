const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answerElement = button.nextElementSibling;

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
