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
    console.log(bookData);  
    $author.text(bookData.volumeInfo && bookData.volumeInfo.authors ? bookData.volumeInfo.authors[0] : "No author available");
    $category.text(bookData.volumeInfo && bookData.volumeInfo.categories ? bookData.volumeInfo.categories : "No category available");
    $description.text(bookData.volumeInfo && bookData.volumeInfo.description ? bookData.volumeInfo.description : "No description available");
    $length.text(bookData.volumeInfo && bookData.volumeInfo.pageCount ? bookData.volumeInfo.pageCount : "No page count available");
    $rating.text(bookData.volumeInfo && bookData.volumeInfo.averageRating ? bookData.volumeInfo.averageRating : "No rating available");
    $published.text(bookData.volumeInfo && bookData.volumeInfo.publishedDate ? bookData.volumeInfo.publishedDate : "No published date available");
 }



 // optional chaining and nullishh collition. basically what you have to do is create a function for each result. so if there's no author. you have to create a function that's like if this parameter doesn't exist, still run this code. 



