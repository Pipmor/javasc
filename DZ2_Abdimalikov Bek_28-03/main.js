let cities = ["Bishkek", "Los Angeles", "Chicago", "New York", "Houston", "Dallas", "Philadelphia", "Seattle"];
let longCities = [];
let sCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i].length > 6) {
        longCities.push(cities[i]);
    }
    if (cities[i].indexOf("s") !== -1 || cities[i].indexOf("S") !== -1) {
        sCities.push(cities[i]);
    }
}

console.log(longCities);
console.log(sCities);



var color = prompt('Choose the color:').toLowerCase()

var trafficlight = new Object();
Red = "Stop"
Yellow = "Wait"
Green = "Go"

switch (color) {
    case 'Red':
        alert("Stop");
        break;
    case 'Yellow':
        alert("Wait");
        break;
    case 'Green':
        alert("go");
        break;
    default:
        alert('Error');
}