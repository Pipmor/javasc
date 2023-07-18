function reverse() {
    const user = prompt('Введите строку:');
    const reversed = Array.from(user).reverse().join('');
    return alert(reversed);
}

reverse();



function getDataType(data) {
    console.log(typeof data);
    return typeof data;
}

var data = ["Hello", 42, 3.14, true, [1, 2, 3]];

for (var i = 0; i < data.length; i++) {
    getDataType(data[i]);
}

getDataType()