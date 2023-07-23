const trafficLight = document.querySelector('.trafficLight');
const changeColorBtn = document.getElementById('changeColorBtn');
let lightColor = 'red';

changeColorBtn.addEventListener('click', () => {
    const userInput = prompt('Введите цвет: "Красный", "Желтый" или "Зеленый"');
    if (userInput) {
        const color = userInput.toLowerCase();
        let message;
        switch (color) {
            case 'красный':
                lightColor = 'red';
                message = 'Стоп';
                break;
            case 'желтый':
                lightColor = 'yellow';
                message = 'Подождите';
                break;
            case 'зеленый':
                lightColor = 'green';
                message = 'Идите';
                break;
            default:
                alert('Некорректный ввод! Введите "Красный", "Желтый" или "Зеленый".');
                return;
        }
        updateTrafficLight(message);
    }
});

function updateTrafficLight(message) {
    const lights = trafficLight.querySelectorAll('.light');
    lights.forEach((light) => {
        light.classList.remove('active');
    });
    trafficLight.querySelector(`.${lightColor}`).classList.add('active');
    alert(`${lightColor.charAt(0).toUpperCase() + lightColor.slice(1)} - ${message}`);
}
