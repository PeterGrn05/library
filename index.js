let library = [];

function addBook(title, author, year, genre, pages) {
  let book = {
    title: title,
    author: author,
    year: year, 
    genre: genre,
    pages: pages,
  };
  library.push(book);
  console.log(`${title} был добавлен в библиотеку.`);
}

function findBooksByAuthor(author) {
  return library.filter(book => book.author === author);
}
    
function filterBooksByGenre(genre) {
  return library.filter(book => book.genre === genre);
}

function genreReport() {
  let rep = {};
  library.forEach(book => {
    if (rep[book.genre]) {
      rep[book.genre]++;
    }
    rep[book.genre] = 1
  })
  return rep;
};
function averagePagesReport() {
  let totalPages = 0;
  library.forEach(book => {
    totalPages += book.pages;
  });
  return totalPages / library.length;
}

function removeBook(title) {
  library = library.filter(book => book.title !== title);
  console.log(`${title} был удален из библиотеки.`);
}


addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));
console.log('----------------');

console.log(filterBooksByGenre("Фэнтези"));
console.log('----------------');

console.log(genreReport());
console.log('----------------');

console.log(`Среднее количество страниц: ${averagePagesReport()}`);
console.log('----------------');

removeBook("1984");
console.log('----------------');
console.log(library);