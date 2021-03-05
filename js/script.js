const $author = $('#authors');
const $category = $('#categories');
const $description = $('#description');
const $length = $('#pageCount');
const $rating = $('#averageRating');
const $published = $('#publishedDate');
const $input = $('input[type="text"]');

let bookData, userInput;

$('form').on('submit', handleGetData);

function handleGetData(event) {
  event.preventDefault();
    userInput = $input.val();
    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + userInput + '&key=AIzaSyA9EhBD8PIV5V0PsAyf4jQDYRSx6ebyAMc'
      }).then(
        (data) => {
         console.log(data)
          bookData = data.items;
          console.log(bookData)
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}

function render() {
    console.log(bookData);
    $("main").empty();
    for (i = 0; i < bookData.length; i++){
    const book = bookData[i]
    renderOne(book);
    }
 }

function renderOne(book) {
  $div = $("<div>")

  $div.html(`
  <h3> Author </h3>
  <h4> ${book.volumeInfo.authors} </h4>
  <h3> Category </h3>
  <h4> ${book.volumeInfo.categories} </h4>
  <h3> Description </h3>
  <h4> ${book.volumeInfo.description} </h4>
  <h3> Number of Pages </h3>
  <h4> ${book.volumeInfo.pageCount} </h4>
  <h3> Rating </h3>
  <h4> ${book.volumeInfo.averageRating} </h4>
  <h3> Year Published </h3>
  <h4> ${book.volumeInfo.publishedDate} </h4>
  <p> ----------------------------</p>
  `
  )

  const $main = $("main")
  $main.append($div)
}

