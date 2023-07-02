    // Function to display the login menu
    function displayLoginMenu() {
      var menu = document.getElementById("loginMenu");
      menu.style.display = "block";
    }
    
    // Function to handle form submission
    function handleFormSubmission(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get the name from the input field
      var nameInput = document.getElementById("name");
      var name = nameInput.value;
      
      // Store the name in cookies
      document.cookie = "username=" + encodeURIComponent(name);
      
      // Display the name
      alert("Welcome, " + name + "!");
      
      // Hide the login menu
      var menu = document.getElementById("loginMenu");
      menu.style.display = "none";
      
      // Reset the form
      document.getElementById("loginForm").reset();
    }
    
    // Add event listener to the login button
    var loginButton = document.querySelector(".login-button");
    loginButton.addEventListener("click", displayLoginMenu);
    
    // Add event listener to the form submission
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", handleFormSubmission);
 


    var slidePosition = 1;
SlideShow(slidePosition);




// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}




//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}




function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}