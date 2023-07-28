// this

// let human= {
//     name: 'John',
//     age: 32,
//     phoneNumber: undefined,
//     isMarried: false,
//     showInfo(){
//         // console.log(`${human.name} ${human.age}`)
//         function info(){
//             console.log(`${this.name} ${this.age}`)
//         }
//
//         console.info()
//     }
// }
// human.showInfo()
//
// //default-params
// // let a= [1,2,3,4,5,6]
// // let newArray = array.join('-')
// // console.log(Array.from(newArray))
// function pushJoin(array, separator){
//     let result= ''
//     for(let i = 0; i < array.length; i++){
//         result += array[i] + (i == array.length - 1 ? '':separator)
//     }
//     return result
// }
// pushJoin(([1,2,], '-'))

const input = document.querySelector('#input');
const createButton = document.querySelector('#creat_button');
const todoList = document.querySelector('#todo_list');

const createTodo = () => {
    const inputValue = input.value.trim();
    if (inputValue === '') {
        alert('Error');
        return;
    }

    const div = document.createElement('div');
    const text = document.createElement('h3');
    const divButtons = document.createElement('div');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    div.setAttribute('class', 'block_text');
    divButtons.setAttribute('class', 'buttons');
    deleteButton.setAttribute('class', 'delete_button');
    editButton.setAttribute('class', 'edit_button');

    deleteButton.innerHTML = 'delete';
    editButton.innerHTML = 'edit';

    deleteButton.onclick = () => div.remove();

    editButton.onclick = () => {
        const editText = prompt(`EDIT ${text.innerHTML}`).trim();
        if (editText !== '') {
            text.innerHTML = editText;
        }
    };

    text.innerHTML = inputValue;
    text.addEventListener('click', () => text.classList.toggle('completed'));
    divButtons.append(deleteButton, editButton);
    div.append(text, divButtons);
    todoList.prepend(div);

    input.value = '';
};

createButton.onclick = () => createTodo();

window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        createTodo();
    }
});




// window.onkeydown = (event) =>{
//     // console.log(event.keyCode)
//     if(event.keyCode === 13){
//         createTodo()
//     }
// }
