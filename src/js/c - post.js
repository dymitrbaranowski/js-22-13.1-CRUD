const BASE_URL = 'http://localhost:4040';
// const newBook = {
//   title: 'Тестовоя книга CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// };

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'aplication/json',
//   },
//   body: JSON.stringify(newBook),
// };

// fetch('http://localhost:4040/books', options)
//   .then(res => res.json())
//   .then(console.log());

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

// addBook({
//   title: 'Тестовая книга по CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестовая книга по HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 7,
// }).then(renderBook);

function renderBook(book) {
  console.log('Пришел ответ от бекенда можно рисовать');
  console.log(book);
}
