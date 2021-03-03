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
         bookData = data;
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}

function render() {
    $author.text(bookData.volumeInfo.authors);
    $category.text(bookData.volumeInfo.categories);
    $description.text(bookData.volumeInfo.description);
    $length.text(bookData.volumeInfo.pageCount);
    $rating.text(bookData.volumeInfo.averageRating);
    $published.text(bookData.volumeInfo.publishedDate);
 }



