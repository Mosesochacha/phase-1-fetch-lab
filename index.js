// const url = 'https://anapioficeandfire.com/api/books'
  function fetchBooks() {
  const response =  fetch ("https://anapioficeandfire.com/api/books");
    const books = response.json();
    return books
  //  const books = fetch(url)
  //  const renderBooks = books.json ()
  //  return renderBooks
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
