// var day = prompt('day')
// var month = prompt('month')
//
// if(day >= 21 && month === 'mart' || day <= 20 && month === 'апрель' && day <= 30){
//     console.log('овен')
// }else if(day >= 21 && month === 'апрель' || day <= 20 && month === 'май' && day <= 31){
//     console.log('весы')
// }else
//     console.error('ошибка')
// var number = 78 / 'qwerty'
// console.log(typeof number)
//
// //switch..case
// var age = Number (prompt('age'))
// switch (age){
//     case 18:
//         console.log('error')
//         break
//     case 19:
//         console.log('error')
//         break
//     case 20:
//         console.log('error')
//         break
//     default:
//         console.log('error')
// }
// switch (color){
//     case 'red':
//         console.log('stop')
//         break
//     case 'yellow':
//         console.log('wait')
//         break
//     case 'green':
//         console.log('go')
//         break
//     default:
//         console.log('error')
// }

var human= {
    name: 'John',
    age: 32,
    phoneNumber: undefined,
    isMarried: false,
}
console.log(human.phoneNumber)

//добавление
human.course = 'GEEKS'
console.log(human)

//даление
delete human.age
console.log(human)

//изменение
human["phoneNumber"] = null
console.log(human)

//методы
console.log(Object.keys(human))
console.log(Object.values(human))
console.log(Object.entries(human))
console.log(human.hasOwnProperty('name'))

//array
var array = ["a","b","c", 5, true, null,[],{}]
console.log(typeof array[2])
console.log(array.length - 1)

// console.log(array);
array[8] = 't'

//переопределние элементов
var num = 10
num = 'asdwqda'
console.log(num)

//циклы
// while ()
var count = 0
while (count <+ 10){
    count++
    console.log(count)
}
// while (count > 0){
//     count++
//     console.log(count)
// }

for (var i = 0; i < 20; i++) {
    console.log(i)
}

var names = ['dads', 'asdad','adsasda','grfsfasd']

for (var i = 0; i < names.length; i++) {
    if(names[i][0] === 'a' || names[i][0] === "A"){
        console.log(`name with letter a - ${names[i]}`)
    }else {
        console.log(`other name - ${names[i]}`)
    }
}

//for..of
var numberss = [1,2,3,4,5,6,7]
for (var i of numberss){
    console.log(numberss)
}
//for..in {}
// var stobe = {'numver'}
// for (var i in stobe){
//     console.log(stobe)
// }
//метод массива
var arr = ('a', 'b')
arr.reverse()
console.log(arr)
arr.push('g')
console.log(arr)
arr.unshift()
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.length)
arr.splice(0,3)
console.log(arr)
