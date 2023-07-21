const trafficLight = document.querySelector('.trafficLight');
const changeColorBtn = document.getElementById('changeColorBtn');
let lightColor = 'red';

changeColorBtn.addEventListener('click', () => {
    const userInput = prompt('Введите цвет: "Красный", "Желтый" или "Зеленый"');
    if (userInput) {
        const color = userInput.toLowerCase();
        switch (color) {
            case 'красный':
                lightColor = 'red';
                break;
            case 'желтый':
                lightColor = 'yellow';
                break;
            case 'зеленый':
                lightColor = 'green';
                break;
            default:
                return alert('Error');

        }
        updateTrafficLight();
    }
});

function updateTrafficLight() {
    const lights = trafficLight.querySelectorAll('.light');
    lights.forEach((light) => {
        light.classList.remove('active');
    });
    trafficLight.querySelector(`.${lightColor}`).classList.add('active');
}
