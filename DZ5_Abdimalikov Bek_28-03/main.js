//1-ое задание
const numbers = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67];

const oddNumbers = numbers.filter((number) => number % 2 !== 0);

oddNumbers.forEach((number) => {
    console.log(number);
});



//2-ое задание
function customFilterBooks(...books) {
    const booksWithU = [];
    const otherBooks = [];

    for (const book of books) {
        if (book.includes('у') || book.includes('У')) {
            booksWithU.push(book);
        } else {
            otherBooks.push(book);
        }
    }

    console.log('Книги с буквой "у" или "Y":', booksWithU);
    console.log('Остальные книги:', otherBooks);
}

customFilterBooks('Путешествие к центру Земли', 'Гарри Поттер и Философский камень', 'Зов Ктулху', 'Мастер и Маргарита', 'Мертвые души', 'Маленький принц', 'Убик', 'Хроники Нарнии',);
