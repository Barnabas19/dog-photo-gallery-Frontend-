//Removing the preloader few seconds after loading
window.addEventListener("load", function(){
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

/* 
When button on main page is clicked, 
change text content and call the getPhoto function
*/
const button = document.querySelector(".button");
button.addEventListener("click", function(){
  button.textContent = "LOAD MORE";
  getPhoto();
});


/*
getPhoto function: fetches photo from public API, using Ajax 
*/
function getPhoto(){
  const URL = "https://dog.ceo/api/breeds/image/random";
  const promise = fetch(URL);
  promise.then(function(response){
    const processingPromise = response.json();
    return processingPromise; 
  }).then(function(processedPromise){
    const div = document.querySelector(".div");

    //creating an image and a container for the image
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = processedPromise.message;
    image.alt = "Nice doggo";
    const container = document.createElement("div");
    container.classList.add("container");
  

    //appending image to its container
    container.appendChild(image);

    //clearing watermark
    const watermark = document.querySelector(".watermark");
    watermark.style.display = "none";

    //appending image-container to the page
    div.appendChild(container);
  });
}