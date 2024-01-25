const showImageButton = document.getElementById("show-image-button");
const myImage = document.getElementById("my-image"); 
showImageButton.addEventListener("click", () => { 
   myImage.style.display = "block"; 
});


document.getElementById('myButton1').addEventListener('click', function() {
  alert('The camera used to take this image is a Nikon Coolpix s6900');
});

document.getElementById('myButton2').addEventListener('click', function() {
  alert('The camera used to take this image is a Canon PowerShot ELPH 360');
});
